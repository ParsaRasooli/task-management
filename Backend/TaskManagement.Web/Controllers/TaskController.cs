
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManagement.Data.Interface;
using TaskManagement.Domain.Model;
using TaskManagement.Interface;

namespace TaskManagement.Web.Controllers
{
    /// <summary>
    /// An api controller for task operations
    /// </summary>

    [EnableCors("MyPolicy")]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : BaseController
    {
        ITaskRepository _taskRepository;

        /// <summary>
        /// TaskController provides task operations
        /// </summary>
        /// <param name="taskRepository"></param>
        /// <param name="httpContextAccessor"></param>
        public TaskController(ITaskRepository taskRepository, IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor)
        {
            this._taskRepository = taskRepository;               
        }

        /// <summary>
        /// Get all tasks from repository
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IList<TaskModel>> Get()
        {
            return await _taskRepository.Get();
        }

        /// <summary>
        /// Get an task from repository by id
        /// </summary>
        /// <param name="id">id is a number value and used for searching in repository</param>
        /// <returns>return value is an task object</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskModel>> Get(int id)
        {
            return await _taskRepository.GetByID(id);            
        }

        /// <summary>
        /// Post an task object and Saved it in repository
        /// </summary>
        /// <param name="task">An task object</param>
        /// <returns>Return value is a request result such as BadRequest,OK,...</returns>
        [HttpPost]        
        public async Task<IActionResult> Post([FromBody] TaskModel task)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await _taskRepository.Insert(task);
                    await _taskRepository.Save();
                    return Ok(task);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch(Exception ex)
            {                
                var errors = new List<string>();
                errors.Add(ex.Message);
                return BadRequest(new { messages = errors});
            }
        }

        /// <summary>
        /// Put an task object and modified it in repository 
        /// </summary>
        /// <param name="id">id is a number value and used for modifiying in repository</param>
        /// <param name="task">An task object</param>
        /// <returns></returns>
        
        [HttpPut("{id:int}")]        
        public async Task<IActionResult> Put(int id, [FromBody] TaskModel task)
        {
            try
            {     
                await _taskRepository.Update(id, task);
                await _taskRepository.Save();

                return Ok();
            }
            catch (Exception ex)
            {
                var errors = new List<string>();
                errors.Add(ex.Message);
                return BadRequest(new { messages = errors });
            }
        }

        /// <summary>
        /// Delete an task by id
        /// </summary>
        /// <param name="id">id is a number value and used for deleteing in repository</param>
        /// <returns></returns>
        // Delete: api/Task
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                await _taskRepository.Delete(id);
                await _taskRepository.Save();

                return Ok();
            }
            catch(Exception ex)
            {
                var errors = new List<string>();
                errors.Add(ex.Message);
                return BadRequest(new { messages = errors });
            }

        }      

    }
}
