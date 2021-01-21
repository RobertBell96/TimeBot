const Discord = require('discord.js');
require('dotenv').config()



function getCurrentTime() {
  const hms = new Date(Date.now()).toUTCString().split(" ")[4].split(":")
  currentTime = hms[0] + ":" + hms[1];
  return currentTime;
}

function changeTime(client, time) {
  client.guilds.cache.get("233603103897812993").members.cache.get(client.user.id).setNickname(time + " ST");
  console.log("Changed time to: " + time);
}

function main() {
  const client = new Discord.Client();

  client.once('ready', () => {
    console.log('TimeBot Online!');
    client.user.setPresence({ activity: { name: 'you.', type: "WATCHING" }, status: 'online' });

    let currentTimeBeforeChange = getCurrentTime();
    changeTime(client, currentTimeBeforeChange);

    setInterval(() => {
      if(getCurrentTime() != currentTimeBeforeChange)
      {
        changeTime(client, getCurrentTime());
        currentTimeBeforeChange = getCurrentTime();
      }
    }, 10000);
  });

  client.on('message', message => {});

  try {
    client.login(process.env.DISCORD_BOT_TOKEN);
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

const token = process.env.DISCORD_BOT_TOKEN

if(token){
  main()
} else {
  console.error("Bot Token not defined");
}

