//initialise discord.js
const Discord = require("discord.js");

module.exports = {
    name: "kcco",

    //execute command
    execute(kccoMsg, args)
    {
        //all kcco units in array
        const kccoNameList = [
            //index 0 is empty; index 1-15, non-boss units
            " ", "Acheron", "Aegis (KCCO)", "Archer", "Beast", "Cerynitis", "Coeus", "Cyclops",
            "Cyclops(SG)", "Dactyl", "Hydra", "Kratos", "Pathfinder", "Recce Centre",
            "Tesla Trooper", "Typhon",

            //index 16-19, boss units
            "Ares", "Argo-Carina", "Argo-Puppis", "Argo-Vera",

            //index 20, Carter; index 21, Yegor
            "General Carter", "Yegor"
        ];

        //all kcco images in array
        const kccoImageList = [
            //index 0 is empty; index 1-15, non-boss units
            " ", "QYt9pgk", "y7nQEaw", "ej32i5G", "9LMnSWi", "H2yO06M", "O841KBS", "TZy5q2p",
            "C6Hmuwa", "IJMg2pP", "J0UNN05", "S7JREHI", "l5nWu8g", "bpSIjwU", "3RYap5H",
            "aSmwP06",

            //index 16-19, boss units
            "K82Ob8n", "Fk2LPbZ", "CnjBl7e", "pS80O54",

            //index 20, Carter; index 21, Yegor
            "c/ca/Character_Profile_Carter.png/800px-Character_Profile_Carter",
            "8/89/Character_Profile_Yegor.png/800px-Character_Profile_Yegor"
        ];

/*
//DEBUGGING PURPOSES ONLY
        //create debug embed
        const kccoDebugEmbed = new Discord.MessageEmbed();
        kccoDebugEmbed.setColor("#2f3136");
        kccoDebugEmbed.setTitle("Debug Menu");
        //send all number of indexes of all arrays
        kccoDebugEmbed.addFields
        (
            {name: "Number of KCCO units", value: (kccoNameList.length - 1)},
            {name: "Number of images", value: (kccoImageList.length - 1)},
        )
        //send debug embed
        kccoMsg.channel.send(kccoDebugEmbed);
*/

        //RNG for KCCO Rarity
        kccoRarityRNG = Math.floor((Math.random() * 100) + 1);

        //roll non-boss units if kccoRarityRNG is 1-75
        if(kccoRarityRNG > 0 && kccoRarityRNG <= 75)
        {
            kccoIndex = Math.floor((Math.random() * 15) + 1);
        }

        //roll boss units if kccoRarityRNG is 76-95
        if(kccoRarityRNG > 75 && kccoRarityRNG <= 95)
        {
            kccoIndex = Math.floor((Math.random() * 4) + 1) + 15;
        }

        //roll carter or yegor if kccoRarityRNG is 96-100
        if(kccoRarityRNG > 95 && kccoRarityRNG <= 100)
        {
            kccoIndex = Math.floor((Math.random() * 2) + 1) + 19;
        }

        //assign name
        kccoName = kccoNameList[kccoIndex];

        //assign image link for all units but carter and yegor
        if(kccoIndex < 20)
        {
            kccoImageLink = "https://i.imgur.com/" + kccoImageList[kccoIndex] + ".png";
        }

        //assign image link for carter and yegor
        else if(kccoIndex >= 20)
        {
            kccoImageLink = "https://iopwiki.com/images/thumb/" + kccoImageList[kccoIndex] + ".png"
        }

        //create embed
        const kccoEmbed = new Discord.MessageEmbed();
        kccoEmbed.setColor("#4a9745");
        kccoEmbed.setTitle(kccoMsg.member.user.tag);
        kccoEmbed.setDescription("You have rolled " + kccoName + "!");
        kccoEmbed.setImage(kccoImageLink);

        //send embed
        kccoMsg.channel.send(kccoEmbed);
    }
}