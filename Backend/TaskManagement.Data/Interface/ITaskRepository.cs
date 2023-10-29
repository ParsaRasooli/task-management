using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Domain.Model;
using TaskManagement.Interface;

namespace TaskManagement.Data.Interface
{
    public interface ITaskRepository : IRepository<TaskModel>
    {
        //Here we can write custom methods
    }
}
