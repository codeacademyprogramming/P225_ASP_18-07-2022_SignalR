using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace P225SignalR.Hubs
{
    public class P225FirstHub : Hub
    {
        public async Task MesajGonders(string isdifadeciAdi, string mesji)
        {
            await Clients.All.SendAsync("mesajqebuleden", isdifadeciAdi, mesji,DateTime.UtcNow.AddHours(4).ToString("dd.MM.yyyy HH:mm:ss:fff"));
        }
    }
}
