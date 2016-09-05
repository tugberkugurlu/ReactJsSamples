using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace ConsoleApplication
{
    public class RequestCountModel 
    {
        public DateTime Date { get; set; }
        public int RequestCount { get; set; }
    }

    [Route("values")]
    public class ValuesController : Controller 
    {
        [HttpGet]
        public IEnumerable<RequestCountModel> Get() 
        {
            var models = new List<RequestCountModel>();
            var random = new Random();
            for (int i = 0; i < 365; i++)
            {
                models.Add(new RequestCountModel 
                { 
                    Date = DateTime.UtcNow.Date.AddDays(-i), 
                    RequestCount = random.Next(5000, 35000)
                });
            }

            return models;
        }
    }

    public class Startup 
    {
        public void ConfigureServices(IServiceCollection services) 
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app) 
        {
            app.UseMvc();
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
