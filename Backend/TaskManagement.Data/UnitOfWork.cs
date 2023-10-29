
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TaskManagement.Data.Context;
using TaskManagement.Interface;

namespace TaskManagement.Data
{
    public class UnitOfWork : IUnitOfWork 
    {
        private readonly InMemoryContext context = new InMemoryContext();

        public void Save()
        {
            this.context.SaveChanges();
        }

        public InMemoryContext Context
        {
            get
            {
                return this.context;
            }
            
        }        
    }
}
