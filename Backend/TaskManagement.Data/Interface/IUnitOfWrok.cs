using System;
using System.Collections.Generic;
using System.Text;
using TaskManagement.Data.Context;

namespace TaskManagement.Interface
{
    public interface IUnitOfWork
    {
        void Save();
        InMemoryContext Context { get; }
    }
}
