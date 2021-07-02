//initialise discord.js
const Discord = require ("discord.js");

module.exports = {
    name: "equip",

    //execute command
    execute(equipMsg, args)
    {
        //all equipment names in array
        const equipNameList = [
            //index 0 is empty; index 1-13, 2* equipment
            " ", "BM 3-12x40", "AC1 Suppressor", "EOT 506", "PEQ-2", "AMP COMPM2",
            "IOP X1 Exoskeleton", "IOP T1 Exoskeleton", "ILM Hollow Point Ammo (2-star)",
            "BK Slug", "#1 Buckshot", "M61 Armor-Piercing Ammo", "Ragged Cape",
            "FMJ High-Velocity Ammo",

            //index 14-27, 3* equipment
            "LRA 2-12x50", "AC2 Suppressor", "EOT 512", "PEQ-5", "AMP COMPM4",
            "Type 1 Armor Plate", "IOP X2 Exoskeleton", "IOP T2 Exoskeleton",
            "ILM Hollow Point Ammo (3-star)", "FST Slug", "#0 Buckshot",
            "M993 Armor-Piercing Ammo", "Camouflage Cape", "JSP High-Velocity Ammo",

            //index 28-42, 4* equipment
            "PSO-1", "AC3 Suppressor", "EOT 516", "PEQ-15", "COG M150", "Type 2 Armor Plate",
            "IOP X3 Exoskeleton", "EOT T3 Exoskeleton", "ILM Hollow Point Ammo (4-star)",
            "WAD Slug", "#00 Buckshot", "Mk169 Armor-Piercing Ammo", "Urban Camouflage Cape",
            "IOP High-Capacity Ammo Box", "JHP High-Velocity Ammo",

            //index 43-57, 5* equipment
            "VFL 6-24x56", "AC4 Suppressor", "EOT 518", "PEQ-16A", "ITI Mars",
            "Type 3 Armor Plate", "IOP X4 Exoskeleton", "IOP T4 Exoskeleton",
            "ILM Hollow Point Ammo", "SABOT Slug", "#000 Buckshot",
            "Mk211 High-Explosive Armor-Piercing Ammo", "Thermoptic Camouflage Cape",
            "IOP Maximum Ammo Box", "APCR High-Velocity Ammo",

            //index 58-84, non-collab fairies
            "Warrior Fairy", "Fury Fairy", "Armor Fairy", "Shield Fairy", "Defense Fairy",
            "Provocation Fairy", "Sniper Fairy", "Artillery Fairy", "Airstrike Fairy",
            "Reinforcement Fairy", "Parachute Fairy", "Landmine Fairy", "Rocket Fairy",
            "Construction Fairy", "Command Fairy", "Rescue Fairy", "Illumination Fairy",
            "Golden Fairy", "Cooking Fairy", "Fireworks Fairy", "Zodiac Fairy", "Beach Fairy",
            "Combo Fairy", "Barrier Fairy", "Twin Fairies", "Origin Fairy", "Auspicious Fairy",

            //index 85-91, collab fairies
            "Yae Sakura", "Kaguya Hime", "Chloe", "Suee", "Sehra & Nina", "Preiya & Camilla",
            "Anna Graem"
        ];

        //all equipment images in array
        const equipImageList = [
            //index 0 is empty; index 1-13, 2* equipment
            " ", "rSbsirE", "3DA6iLx", "M25Mdod", "ZwrTofE", "pAh2xqL", "Ia0nisr", "MXMqWOj",
            "LJk3U9Y", "ITq0t9W", "oeFuN8C", "YRtC7Cq", "F1qXaA2", "p7JqSlX",

            //index 14-27, 3* equipment
            "kkHOzea", "58StWdb", "cnzkv9Y", "EzUQKXz", "3i5JKEl", "0GtxIn2", "3hzkHoU",
            "k8RmUkd", "6EfUBGw", "3fTPdJu", "FrWuhOQ", "yE45idk", "7DbqD2y", "GpR749F",

            //index 28-42, 4* equipment
            "SHq4Ae4", "az4ZuRx", "PxOvUx1", "OsAws0r", "zNi4INN", "f0nIH56", "M2RBi2H",
            "ywSFQAa", "9Zrve9E", "eylMaOc", "i0Fw4BE", "cQeVN9U", "CHD5gJR", "S072wWl",
            "qIdCDzK",

            //index 43-57, 5* equipment
            "1xOPkUo", "aieo4je", "qIhIpb9", "pcLVHgE", "DePmPAc", "kYZMJEn", "bD42NZT",
            "uTZ8XXQ", "aGhUijZ", "P9jMfK6", "n9Pt5pO", "1MJ4iGv", "J5Hfp09", "jxASkTy",
            "EP54iiJ",

            //index 58-84, non-collab fairies
            "4/46/Warrior_Fairy", "0/01/Fury_Fairy", "5/55/Armor_Fairy", "3/38/Shield_Fairy",
            "9/9d/Defense_Fairy", "0/0b/Provocation_Fairy", "2/20/Sniper_Fairy.png",
            "1/1f/Bombardment_Fairy", "4/41/Airstrike_Fairy", "9/96/Reinforcement_Fairy",
            "c/c6/Parachute_Fairy", "7/73/Landmine_Fairy", "c/cb/Rocket_Fairy",
            "4/49/Construction_Fairy", "8/8e/Command_Fairy", "2/20/Rescue_Fairy",
            "c/c1/Illumination_Fairy", "1/15/Golden_Fairy", "1/1d/Cooking_Fairy",
            "f/f6/Firework_Fairy", "0/0b/Nian_Fairy", "b/b8/Beach_Fairy", "7/7f/Combo_Fairy",
            "b/b1/Barrier_Fairy", "1/15/Twin_Fairy", "f/f6/Origin_Fairy",
            "b/bc/Auspicious_Fairy",

            //index 85-91, collab fairies
            "e/e9/Yae_Sakura", "e/e6/Kaguya_Hime", "f/f2/Chloe", "4/46/Suee",
            "2/2e/Sehra_%26_Nina", "2/24/Preiya_%26_Camilla", "c/c0/Anna_Graem"
        ];

/*
//DEBUGGING PURPOSES ONLY
        //create debug embed
        const equipDebugEmbed = new Discord.MessageEmbed();
        equipDebugEmbed.setColor("#2f3136");
        equipDebugEmbed.setTitle("Debug Menu");
        //send all number of indexes of all arrays
        equipDebugEmbed.addFields
        (
            {name: "Number of equipment & fairies", value: (equipNameList.length - 1)},
            {name: "Number of images", value: (equipImageList.length - 1)},
        )
        //send debug embed
        equipMsg.channel.send(equipDebugEmbed);
*/

        //RNG for equipment rarity
        equipRarityRNG = Math.floor((Math.random() * 100) + 1);

        //roll 2* equipment if equipRarityRNG is 1-40
        if(equipRarityRNG > 0 && equipRarityRNG <= 40)
        {
            equipEmbedColour = "#fcfcfc";
            equipIndex = Math.floor((Math.random() * 13) + 1);
        }

        //roll 3* equipment if equipRarityRNG is 41-70
        if(equipRarityRNG > 40 && equipRarityRNG <= 70)
        {
            equipEmbedColour = "#6bdfce";
            equipIndex = Math.floor((Math.random() * 14) + 1) + 13;
        }

        //roll 4* equipment if equipRarityRNG is 71-85
        if(equipRarityRNG > 70 && equipRarityRNG <= 85)
        {
            equipEmbedColour = "#dce35a";
            equipIndex = Math.floor((Math.random() * 15) + 1) + 27;
        }

        //roll 5* equipment if equipRarityRNG is 86-90
        if(equipRarityRNG > 85 && equipRarityRNG <= 90)
        {
            equipEmbedColour = "#ffb600";
            equipIndex = Math.floor((Math.random() * 15) + 1) + 42;
        }

        //roll non-collab fairy if equipRarityRNG is 91-99
        if(equipRarityRNG > 90 && equipRarityRNG <= 99)
        {
            equipEmbedColour = "#ffb600";
            equipIndex = Math.floor((Math.random() * 27) + 57);
        }

        //roll collab fairy if equipRarityRNG is 100
        if(equipRarityRNG == 100)
        {
            equipEmbedColour = "#ffb600";
            equipIndex = Math.floor((Math.random() * 7) + 84);
        }

        //assign equipment name
        equipName = equipNameList[equipIndex];

        //assign equipment image (normal equipment)
        if(equipRarityRNG > 0 && equipRarityRNG <=90)
        {
            equipImageLink = "https://i.imgur.com/" + equipImageList[equipIndex] + ".png";
        }

        //assign equipment image (fairies)
        else if(equipRarityRNG > 90 && equipRarityRNG <= 100)
        {
            equipImageLink = "https://iopwiki.com/images/" + equipImageList[equipIndex] + ".png";
        }

        //create embed
        const equipEmbed = new Discord.MessageEmbed();
        equipEmbed.setColor(equipEmbedColour);
        equipEmbed.setTitle(equipMsg.member.user.tag);
        equipEmbed.setDescription("You have rolled " + equipName + "!");
        equipEmbed.setImage(equipImageLink);

        //send embed
        equipMsg.channel.send(equipEmbed);
    }
}