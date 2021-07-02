//initialise discord.js
const Discord = require("discord.js");

module.exports = {
    name: "help",

    //execute commands
    execute(helpMsg, args)
    {    
        //create embed
        const helpEmbed = new Discord.MessageEmbed;
        helpEmbed.setColor("#2f3136");
        helpEmbed.setTitle("List of Commands:");
        helpEmbed.setDescription("Prefix\t: =");
        helpEmbed.addFields(
            {name: "doll", value: "To roll a doll."},
            {name: "equip", value: "To roll an equipment/fairy."},
            {name: "sf", value: "To roll a Sangvis Ferri unit."},
            {name: "kcco", value: "To roll a KCCO unit."},
            {name: "paradeus", value: "To roll a Paradeus unit."},
            {name: "rate", value: "To see all drop rates."},
            {name: "rateup", value: "To increase drop rates."},
            {name: "nytobap", value: "To bap a nyto."},
            {name: "junya", value: "To get a picture of junya."}
        );

        //send embed
        helpMsg.channel.send(helpEmbed);
    }
    
}