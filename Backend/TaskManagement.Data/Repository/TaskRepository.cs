
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Data.Context;
using TaskManagement.Domain.Model;
using TaskManagement.Interface;
using System.Linq;
using System.Data;
using TaskManagement.Data.Interface;

namespace TaskManagement.Data.Repository
{
    public class TaskRepository : BaseRepository<TaskModel>, ITaskRepository, IDisposable
    {
        InMemoryContext _context;
        public TaskRepository(IUnitOfWork unitOfWork,ILogger<TaskModel> logger) : base(unitOfWork,logger)
        {
            _context = unitOfWork.Context;
        }
       
        public void Dispose()
        {
            this._context = null;
        }

        public override Task Insert(TaskModel entity)
        {
            var result = this._context.Tasks.AsQueryable();
            var existTaskName = result.Any(t => t.Name == entity.Name);
            if (existTaskName)
                throw new DuplicateNameException("The name of task is duplicated");

            return base.Insert(entity);
        }

        public override Task Update(int id, TaskModel entity)
        {
            var allTask = this._context.Tasks.AsQueryable();
            var existTaskName = allTask.Any(t => t.Name == entity.Name && t.Id != id);
            if (existTaskName)
                throw new DuplicateNameException("The name of task is duplicated");
            
            return base.Update(id, entity);
        }

        public override Task Delete(int id)
        {
            var allTask = this._context.Tasks.AsQueryable();
            var isExisted = allTask.Any(t => t.Id == id);
            if (isExisted)
            {
                if (allTask.Any(t => t.Id == id && t.Status == Domain.Enum.StatusType.Completed))
                {
                    return base.Delete(id);
                }
                else
                    throw new Exception("Deletion of uncompleted task is impossible");

            }
            else
                throw new Exception("Deletion of record is impossible");
        }

        

        public Task GetTaskByID(int taskId)
        {
            throw new NotImplementedException();
        }       

        public IEnumerable<TaskModel> SearchTaskByName()
        {
            throw new NotImplementedException();
        }
    }
}
