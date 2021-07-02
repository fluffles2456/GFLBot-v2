//initialise discord.js
const Discord = require("discord.js");

module.exports = {
    name: "paradeus",

    //execute command
    execute(paradeusMsg, args)
    {
        //all paradeus units in array
        const paradeusNameList = [
            //index 0 is empty; index 1-5, common non-boss paradeus units
            " ", "Doppelsodner", "Pyxis", "Rodelero", "Strelet", "Strelet+",

            //index 6-9, rare non-boss paradeus units
            "Isomer (Enemy)", "Roarer", "Thunder (Enemy)", "Uhlan",

            //index 10-12, non-nyto bosses
            "Gebbennu", "Isomer Black", "Isomer White",

            //index 13 & 14, unnamed nyto bosses
            "Nyto Black", "Nyto White",

            //index 15 & 16, named nyto bosses
            "Mercurows", "Nimogen"
        ];

        //all paradeus images in array
        const paradeusImageList = [
            //index 0 is empty; index 1-5, common non-boss paradeus units
            " ", "7NU0e0K", "NT4z95j", "cb68KlE", "uEE7cZ5", "00ZOfJN",

            //index 6-9, rare non-boss paradeus units
            "ey3A1fh", "3k9Fopj", "HY8B2ck", "gxXQKZS",

            //index 10-12, non-nyto bosses
            "ODk8qPf", "Gf5Obbl", "x5WNVRU",

            //index 13 & 14, unnamed nyto bosses
            "0Aw0cYc", "SaAl6lZ",

            //index 15 & 16, named nyto bosses
            "snIeUSS", "Q1KR8Qs"
        ];

/*
//DEBUGGING PURPOSES ONLY        
        //create debug embed
        const paradeusDebugEmbed = new Discord.MessageEmbed();
        paradeusDebugEmbed.setColor("#2f3136");
        paradeusDebugEmbed.setTitle("Debug Menu");
        //send all number of indexes of all arrays
        paradeusDebugEmbed.addFields
        (
            {name: "Number of paradeus units", value: (paradeusNameList.length - 1)},
            {name: "Number of images", value: (paradeusImageList.length - 1)},
        )
        //send debug embed
        paradeusMsg.channel.send(paradeusDebugEmbed);
*/        

        //RNG for paradeus rarity
        paradeusRarityRNG = Math.floor((Math.random() * 100) + 1);

        //roll common non-boss paradeus units if paradeusRarityRNG is 1-50
        if(paradeusRarityRNG > 0 && paradeusRarityRNG <= 50)
        {
            paradeusIndex = Math.floor((Math.random() * 5) + 1);
        }

        //roll rare non-boss paradeus units if paradeusRarityRNG is 51-80
        if(paradeusRarityRNG > 50 && paradeusRarityRNG <= 80)
        {
            paradeusIndex = Math.floor((Math.random() * 4) + 1) + 5;
        }

        //roll non-nyto paradeus bosses if paradeusRarityRNG is 81-90
        if(paradeusRarityRNG > 80 && paradeusRarityRNG <= 90)
        {
            paradeusIndex = Math.floor((Math.random() * 3) + 1) + 9;
        }

        //roll unnamed nyto bosses if paradeusRarityRNG is 91-96
        if(paradeusRarityRNG > 90 && paradeusRarityRNG <= 96)
        {
            paradeusIndex = Math.floor((Math.random() * 2) + 1) + 12;
        }

        //roll named nyto bosses if paradeusRarityRNG is 97-100
        if(paradeusRarityRNG > 96 && paradeusRarityRNG <= 100)
        {
            paradeusIndex = Math.floor((Math.random() * 2) + 1) + 14;
        }

        //assign paradeus name
        paradeusName = paradeusNameList[paradeusIndex];

        //assign paradeus image link
        paradeusImageLink = "https://i.imgur.com/" + paradeusImageList[paradeusIndex] + ".png";

        //create embed
        const paradeusEmbed = new Discord.MessageEmbed();
        paradeusEmbed.setColor("#fafafa");
        paradeusEmbed.setTitle(paradeusMsg.member.user.tag);
        paradeusEmbed.setDescription("You have rolled " + paradeusName + "!");
        paradeusEmbed.setImage(paradeusImageLink);

        //send embed
        paradeusMsg.channel.send(paradeusEmbed);
    }
}