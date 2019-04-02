const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
});

client.on("ready", () => { // Rainbow
  function lol() {
    client.guilds.get('562017809287086091').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 2000);
});

client.login(process.env.BOT_TOKEN);