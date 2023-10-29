using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagement.Interface
{
    public interface IRepository<TEntity> : IDisposable
    {
        IEnumerable<TEntity> SearchByName();
        Task<TEntity> GetByID(int id);
        Task<IList<TEntity>> Get();
        Task Insert(TEntity entity);
        Task Update(int id,TEntity entity);
        Task Delete(int id);
        Task Save();
        Task<int> GetCount();
    }
}
