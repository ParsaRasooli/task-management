using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Interface;

namespace TaskManagement.Data.Repository
{
    public class BaseRepository<TEntity> : IRepository<TEntity>  where TEntity : class
    {                

        private IUnitOfWork _unitOfWork;
        private ILogger<TEntity> _logger;
        private DbSet<TEntity> entities;
        public BaseRepository(IUnitOfWork unitOfWork, ILogger<TEntity> logger)
        {
            _unitOfWork = unitOfWork;
            entities = _unitOfWork.Context.Set<TEntity>();
            _logger = logger;            
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public async Task<IList<TEntity>> Get()
        {
            try
            {
                var result = await entities.ToListAsync();
                _logger.Log(LogLevel.Information,"Read all entities");
                return result;
            }
            catch(Exception ex)
            {
                _logger.Log(LogLevel.Error,"Error occurred during get all entities . Error detail:" + ex.Message);
                return null;
            }
            
        }

        public async Task<int> GetCount()
        {
            try
            {
                var result = await entities.CountAsync();
                _logger.Log(LogLevel.Information, "Get count of entities");
                return result;
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, "Error occurred during get all entities . Error detail:" + ex.Message);
                return -1;
            }

        }

        public async Task<TEntity> GetByID(int id)
        {
            try
            {
                var result = await entities.FindAsync(id);
                _logger.Log(LogLevel.Information, "Get entity by Id");
                return result;
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, "Error occurred during GetByID method . Error detail:" + ex.Message);
                return null;
            }    
        }

        public virtual async Task Insert(TEntity entity)
        {
            try
            {
                await entities.AddAsync(entity);
                _logger.Log(LogLevel.Information, "Insert new entity");                
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, "Error occurred during Insert method . Error detail:" + ex.Message);                
            }                                            
        }        

        public async Task Save()
        {
            try
            {
                await _unitOfWork.Context.SaveChangesAsync();
                _logger.Log(LogLevel.Information, "Save all changes into DB");
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, "Error occurred during Save method . Error detail:" + ex.Message);
            }
            
        }

        public IEnumerable<TEntity> SearchByName()
        {
            throw new NotImplementedException();
        }

        public virtual async Task Update(int id, TEntity entity)
        {
            try
            {
                TEntity oldEntity = await entities.FindAsync(id);
                if (oldEntity != null)
                {
                    _unitOfWork.Context.Entry(oldEntity).CurrentValues.SetValues(entity);
                }
                _logger.Log(LogLevel.Information, "Update an entity in DB");
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, "Error occurred during Update method . Error detail:" + ex.Message);
            }
            
        }

        public virtual async Task Delete(int id)
        {
            try
            {
                TEntity entity = await entities.FindAsync(id);
                entities.Remove(entity);
                _logger.Log(LogLevel.Information, "Delete an entity in DB");
            }
            catch (Exception ex)
            {
                _logger.Log(LogLevel.Error, "Error occurred during Delete method . Error detail:" + ex.Message);
            }
            
        }
    }
}
