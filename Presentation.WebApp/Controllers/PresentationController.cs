using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Presentation.WebApp.Controllers
{
    public class PresentationController : Controller
    {
        // GET: Presentation
        public ActionResult Index()
        {
            return View();
        }
    }
}