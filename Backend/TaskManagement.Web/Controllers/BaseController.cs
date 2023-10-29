using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Globalization;
using System.Threading;

namespace TaskManagement.Web.Controllers
{
    /// <summary>
    /// Base class for all repositories
    /// </summary>
    public class BaseController : ControllerBase
    {
        
        private IHttpContextAccessor _httpContextAccessor;
        
        /// <summary>
        /// constructor with HttpContext
        /// </summary>
        public BaseController(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            var cuurentLang = GetAcceptLanguages();            

            Thread.CurrentThread.CurrentCulture = CultureInfo.GetCultureInfo(cuurentLang);
            Thread.CurrentThread.CurrentUICulture = CultureInfo.GetCultureInfo(cuurentLang);
        }

        /// <summary>
        /// Get current language from http header
        /// </summary>
        /// <returns></returns>
        protected string GetAcceptLanguages()
        {
            var acceptLanguages = "en-US";
            var header = _httpContextAccessor.HttpContext.Request.Headers["Accept-Language"];
            if (!String.IsNullOrEmpty(header))
            {
                switch(header)
                {
                    case "de":
                        acceptLanguages = "de-DE";
                        break;
                    //Add other supported languages here
                }
            }

            return acceptLanguages;
        }


    }
}
