using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hahn.ApplicationProcess.February2021.Domain.Validation
{
    /// <summary>
    /// Purchase date for check validation on model
    /// </summary>
    public class PurchaseDateRangeAttribute : ValidationAttribute
    {
        private DateTime minimum;
        private DateTime maximum;

        public PurchaseDateRangeAttribute()
        {
            minimum = DateTime.Now.AddYears(-1);
            maximum = DateTime.Now.AddYears(-1).AddYears(1);            
        }

        public override bool IsValid(object value)
        {
            if (value == null) return false;
            
            DateTime dateValue = (DateTime)value;
            return dateValue >= minimum && dateValue <= maximum;
        }
    }
}
