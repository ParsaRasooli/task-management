
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Domain.Model;

namespace TaskManagement.Data.Context
{
    public class InMemoryContext: DbContext     
    {
        public InMemoryContext(DbContextOptions options)
        : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("TaskManagement");
            base.OnConfiguring(optionsBuilder);
        }
        public InMemoryContext()       
        { 
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaskModel>()
            .Property(p => p.Id)
            .ValueGeneratedOnAdd();

            modelBuilder.Entity<TaskModel>(entity => {
                entity.HasIndex(e => e.Name).IsUnique();
            });
        }

        public DbSet<TaskModel> Tasks { get; set; }    
    }
}
