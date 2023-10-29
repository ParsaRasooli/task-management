using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaskManagement.Domain.Enum;
using TaskManagement.Domain.Resource;

namespace TaskManagement.Domain.Model
{
    public class TaskModel
    {
        [Required(ErrorMessageResourceName = "IdRequired", ErrorMessageResourceType = typeof(Strings))]
        public int Id { get; set; }

        [Required(ErrorMessageResourceName = "NameRequired", ErrorMessageResourceType = typeof(Strings))]        
        public string Name { get; set; }

        [Required(ErrorMessageResourceName = "StatusTypeRequired", ErrorMessageResourceType = typeof(Strings))]
        [EnumDataType(typeof(StatusType), ErrorMessageResourceName = "IncorretDepartment",ErrorMessageResourceType = typeof(Strings))]
        public StatusType Status { get; set; }
                
        public int Priority { get; set; }                
        
    }
}
