//initialise discord.js
const Discord = require("discord.js");

module.exports = {
    name: "rateup",

    //execute command
    execute(rateupMsg, args)
    {
        //create embed
        const rateupEmbed = new Discord.MessageEmbed;
        rateupEmbed.setColor("#2f3136");
        rateupEmbed.setTitle(rateupMsg.member.user.tag);
        rateupEmbed.setImage("https://i.imgur.com/WzCfPuI.png");

        //send embed
        rateupMsg.channel.send(rateupEmbed);
    }
}