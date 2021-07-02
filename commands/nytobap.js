//initialise discord.js
const Discord = require("discord.js");

module.exports = {
    name: "nytobap",

    //execute command
    execute(nytobapMsg, args)
    {
        //create embed
        const nytobapEmbed = new Discord.MessageEmbed();
        nytobapEmbed.setColor("#2f3136");
        nytobapEmbed.setTitle(nytobapMsg.member.user.tag);
        nytobapEmbed.setImage
        ("https://media.discordapp.net/attachments/502651633843306498/691780322068529162/1584977080598.gif");

        //send embed
        nytobapMsg.channel.send(nytobapEmbed);
    }
}