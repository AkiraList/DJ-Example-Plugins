const { MessageEmbed } = require("discord.js");
const config = require(process.cwd()+"/botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { Command } = require('easy-djs-commandhandler');

module.exports = new Command({ 
    name: "ping",
    category: "Information",
    aliases: ["latency"],
    cooldown: 2, // Not working atm, so default CD is 5 seconds.
    usage: "ping",
    description: "Pong!?",
    }).execute((client, message, args) => {

    // Your Code Here...
      message,channe.send("PONG!")
    // Your code Above...
  })

