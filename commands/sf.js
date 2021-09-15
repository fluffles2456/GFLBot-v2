//initialise discord.js
const Discord = require("discord.js");

module.exports = {
    name: "sf",

    //execute command
    execute(sfMsg, args)
    {
        //all sangvis ferri units in array
        const sfNameList = [
            //index 0 is empty; index 1-12, unarmoured units
            " ", "Brute", "Dinergate", "Dragoon", "Goliath", "Guard", "Jaeger", "Jaguar",
            "Prowler", "Ripper", "Scout", "Striker", "Vespid",

            //index 13-17, armoured units
            "Aegis", "Jupiter Cannon", "Manticore", "Nemeum", "Tarantula",

            //index 18-32, ringleaders
            "Agent", "Alchemist", "Architect", "Beak", "Destroyer", "Dreamer", "Ephelt (Boss)",
            "Executioner", "Gager", "Hunter", "Intruder", "Judge", "M16 (Boss)", "Ouruboros",
            "Scarecrow"
        ];

        //all sf images in array
        const sfImageList = [
            //index 0 is empty; index 1-12, unarmoured units
            " ", "Ji9RYct", "HU0xEMR", "CHjdg80", "YAHdGLN", "f9A2G8j", "EXNXu4w", "tDQdT5Z",
            "UJc7yRd", "4XRq381", "dcGxRcT", "GrIIIx0", "r6uE39V",

            //index 13-17, armoured units
            "sXntYiA", "T9TJoGq", "fKvRLRW", "BPK7jpl", "LqTUWah",

            //index 18-32, ringleaders
            "xiXYVyh", "NGIy80u", "XsMqCTC", "66jXXPr", "zZNO5vU", "7adW9sd", "odIgEnx",
            "bGzhw1H", "Jg0lURM", "ic6MCzJ", "bNdOVML", "hv9GW1K", "wJ513Ij", "OMUrqv5",
            "xswLd5o"
        ];

        //all sangvis ferri units with alternative forms
        const sfAltNameList = [
            //index 0-5, non-ringleaders except goliath
            "Aegis", "Dragoon", "Guard", "Jaeger", "Prowler", "Striker",

            //index 6, goliath
            "Goliath",

            //index 7-9, ringleaders except destroyer
            "Executioner", "Hunter", "Ouruboros",

            //index 10, destroyer
            "Destroyer"
        ];

        //all images for sf alternative forms
        const sfAltImageList = [
            //index 0-5, non-ringleaders except goliath
            "AggP698", "2BvRjxz", "R9zyNBU", "3CApP85", "pkT9TQS", "wUHOQBN",

            //index 6, goliath
            "v81MsgN",

            //index 7-9, ringleaders except destroyer
            "8n5T4hA", "exgVJnX", "yfx38AJ",

            //index 10-11, destroyer; Gaia, Garm
            "1V2i1XP", "XzExs4X"
        ];

//DEBUGGING PURPOSES ONLY
/*
        //create debug embed
        const sfDebugEmbed = new Discord.MessageEmbed();
        sfDebugEmbed.setColor("#2f3136");
        sfDebugEmbed.setTitle("Debug Menu");
        //send all number of indexes of all arrays
        sfDebugEmbed.addFields
        (
            {name: "Number of SF units (normal)", value: (sfNameList.length - 1)},
            {name: "Number of images (normal)", value: (sfImageList.length - 1)},
            {name: "Number of SF units (alt version)", value: sfAltNameList.length},
            {name: "Number of images (alt version)", value: sfAltImageList.length}
        )
        //check for any repetition in both images arrays
        for(let debugAltIndex = 0; debugAltIndex < sfAltImageList.length; debugAltIndex++)
        {
            for(let debugNonAltIndex = 1; debugNonAltIndex < sfImageList.length; debugNonAltIndex++)
            {
                if(sfAltImageList[debugAltIndex] == sfImageList[debugNonAltIndex])
                {
                    sfDebugEmbed.addField("Image Repetition", debugAltIndex + ", " + debugNonAltIndex);
                }
            }
        }
        //send debug embed
        sfMsg.channel.send(sfDebugEmbed);
*/

        //RNG for SF rarity
        sfRarityRNG = Math.floor((Math.random() * 100) + 1);

        //roll non-armoured units if sfRarityRNG is 1-65
        if(sfRarityRNG > 0 && sfRarityRNG <= 65)
        {
            sfIndex = Math.floor((Math.random() * 12) + 1);
        }

        //roll armoured units if sfRarityRNG is 66-85
        if(sfRarityRNG > 65 && sfRarityRNG <= 85)
        {
            sfIndex = Math.floor((Math.random() * 5) + 1) + 12;
        }

        //roll ringleader is sfRarityRNG is 86-100
        if(sfRarityRNG > 85 && sfRarityRNG <= 100)
        {
            sfIndex = Math.floor((Math.random() * 15) + 1) + 17;
        }

        //assign name of SF unit
        sfName = sfNameList[sfIndex];

        //assign image of SF unit
        sfImageLink = "https://i.imgur.com/" + sfImageList[sfIndex] + ".png";

        //assign altFlag = 0
        altFlag = 0;

        //check alternative form availability
        for(let sfAltIndex = 0; sfAltIndex < sfAltNameList.length; sfAltIndex++)
        {
            if(sfName == sfAltNameList[sfAltIndex])
            {
                //alt form for all sf except destroyer
                if(sfAltIndex < 10)
                {
                    //RNG to get alt variant
                    altRNG = Math.floor((Math.random() * 5) + 1);

                    //if alt variant is chosen (40%)
                    if(altRNG > 3)
                    {
                        //assign alt variant image link
                        sfImageLink = "https://i.imgur.com/" + sfAltImageList[sfAltIndex] + ".png";

                        //case for non-ringleader except goliath
                        if(sfAltIndex <= 5)
                        {
                            sfName = sfName + " (SWAP)";
                        }

                        //case for goliath
                        else if(sfAltIndex == 6)
                        {
                            sfName = sfName + "+"
                        }

                        //case for ringleader except destroyer
                        else if(sfAltIndex > 6 && sfAltIndex < 10)
                        {
                            sfName = sfName + "(EX)";
                        }
                    }
                }

                //alt form for destroyer
                else if(sfAltIndex == 10)
                {
                    //RNG to get alt variant
                    altRNG = Math.floor((Math.random() * 10) + 1);

                    //if statement for gaia (30%)
                    if(altRNG > 4 && altRNG <= 7)
                    {
                        //assign new name
                        sfName = "Gaia";
                        //assign new image link
                        sfImageLink = "https://i.imgur.com/" + sfAltImageList[10] + ".png";
                    }

                    //else if statement for for Garm
                    else if(altRNG > 7 && altRNG <= 10)
                    {
                        //assign new name
                        sfName = "Garm";
                        //assign new image link
                        sfImageLink = "https://i.imgur.com/" + sfAltImageList[11] + ".png";
                    }
                }
            }
        }

        //create embed
        const sfEmbed = new Discord.MessageEmbed;
        sfEmbed.setColor("#ff5599");
        sfEmbed.setTitle(sfMsg.member.user.tag);
        sfEmbed.setDescription("You have rolled " + sfName + "!");
        sfEmbed.setImage(sfImageLink);

        //send embed
        sfMsg.channel.send(sfEmbed);
    }
}