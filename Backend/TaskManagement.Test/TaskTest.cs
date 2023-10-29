using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using TaskManagement.Data.Repository;
using TaskManagement.Domain.Model;
using TaskManagement.Interface;
using System.Linq;
using Microsoft.Extensions.Logging;
using TaskManagement.Data;
using System;
using System.Data;

namespace TaskManagement.Test
{
    [TestClass]
    public class TaskTest
    {
        IRepository<TaskModel> repository;
        public TaskTest()
        {            
            var unitOfWork = new UnitOfWork();            
            var logger = new Mock<ILogger<TaskModel>>();            
            repository = new TaskRepository(unitOfWork,logger.Object);     
        }

        [TestMethod]
        public void Can_Insert_NewTask()
        {
            var insertedTask = InsertNewTask();
            Assert.IsNotNull(insertedTask);            
        }

        [TestMethod]
        public void Can_Get_Task()
        {   
            var tasks = repository.Get().Result;
            Assert.IsNotNull(tasks);
        }

        [TestMethod]
        public void Can_Get_Count_Of_Task()
        {
            var tasks = repository.GetCount().Result;
            Assert.IsTrue(tasks > -1);
        }


        [TestMethod]
        public void Can_Update_Task()
        {
            var insertedTask = InsertNewTask();
            if(insertedTask != null)
            { 
                var tasks = repository.Get().Result;

                TaskModel taskModel = tasks.First();
                string updatedName = $"Test task {taskModel.Id} - updated";

                taskModel.Name = updatedName;
                taskModel.Priority = 2;
                taskModel.Status = Domain.Enum.StatusType.Completed;

                repository.Update(taskModel.Id, taskModel);
                repository.Save();

                var updatedTask = repository.GetByID(taskModel.Id).Result;

                Assert.AreEqual(updatedTask.Name, updatedName);
            }
            else
                Assert.Fail("Update failed");
        }    
        


        [TestMethod]
        public void CanNot_InsertTask_With_DuplicateName()
        {
            var insertedTask = InsertNewTask();
            DuplicateNameException duplicateNameException = null;
            if (insertedTask != null)
            {
                try
                {
                    TaskModel taskModel = new TaskModel();              
                    taskModel.Name = insertedTask.Name;
                    taskModel.Priority = 1;
                    taskModel.Status = Domain.Enum.StatusType.NotStarted;

                    repository.Insert(taskModel);
                    repository.Save();
                    
                }
                catch(DuplicateNameException ex)
                {                    
                    duplicateNameException = ex;
                }

                Assert.IsTrue(duplicateNameException != null, "Can not save records with duplicate names");
            }
        }

        [TestMethod]
        public void Can_Delete_CompletedTask()
        {
            var taskModel = InsertNewCompletedTask();
            Exception exception = null;
            if (taskModel != null)
            {
                try
                {
                    repository.Delete(taskModel.Id);
                    repository.Save();
                }
                catch(Exception ex)
                {
                    exception = ex;
                }

                Assert.IsTrue(exception == null, "Can not deleted completed tasks");
            }
            else
                Assert.Fail("delete failed");
        }

        [TestMethod]
        public void Can_Not_Delete_UncompeltedTask()
        {
            var taskModel = InsertNewTask();
            Exception exception = null;
            if (taskModel != null)
            {
                try
                {
                    repository.Delete(taskModel.Id);
                    repository.Save();
                }
                catch (Exception ex)
                {
                    exception = ex;
                }

                Assert.IsTrue(exception != null, "Can not deleted uncompleted tasks");
            }
            else
                Assert.Fail("delete failed");
        }

        private TaskModel InsertNewCompletedTask()
        {          
            TaskModel taskModel = new TaskModel();
            var newGuid = Guid.NewGuid();
            taskModel.Name = $"Test task {newGuid}";
            taskModel.Priority = 1;
            taskModel.Status = Domain.Enum.StatusType.Completed;

            repository.Insert(taskModel);
            repository.Save();

            return taskModel;
        }

        private TaskModel InsertNewTask()
        {           

            TaskModel taskModel = new TaskModel();
            var newGuid = Guid.NewGuid();
            taskModel.Name = $"Test task {newGuid}";
            taskModel.Priority = 1;
            taskModel.Status = Domain.Enum.StatusType.NotStarted;

            repository.Insert(taskModel);
            repository.Save();            

            return taskModel;
        }

    }
}
