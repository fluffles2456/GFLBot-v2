//initialise discord.js
const Discord = require("discord.js");

//initialise pagination
const Pagination = require("discord.js-pagination");

module.exports = {
    name: "rate",

    //execute command
    execute(rateMsg, args)
    {
        //doll rate page
        const dollPage = new Discord.MessageEmbed;
        dollPage.setColor("#ff6d00");
        dollPage.setTitle("Drop Rate of Dolls:");
        dollPage.addFields(
            {name: "2* Dolls", value: "45%"},
            {name: "3* Dolls", value: "35%"},
            {name: "4* Dolls", value: "14%"},
            {name: "5* Dolls", value: "5%"},
            {name: "Collab Dolls", value: "1%"},
            {name: "Note", value: "40% chance to roll the doll's Mod 3 variant (if any)."},
        );

        //equipment rate page
        const equipPage = new Discord.MessageEmbed;
        equipPage.setColor("#3275bf");
        equipPage.setTitle("Drop Rate of Equipment/Fairies:");
        equipPage.addFields(
            {name: "2* Equipment", value: "40%"},
            {name: "3* Equipment", value: "30%"},
            {name: "4* Equipment", value: "15%"},
            {name: "5* Equipment", value: "5%"},
            {name: "Non-collab Fairies", value: "9%"},
            {name: "Collab Fairies", value: "1%"},
        );

        //sf rate page
        const sfPage = new Discord.MessageEmbed;
        sfPage.setColor("#ff5599");
        sfPage.setTitle("Drop Rate of SF Units:");
        sfPage.addFields(
            {name: "Unarmoured Units", value: "65%"},
            {name: "Armoured Units", value: "20%"},
            {name: "Ringleaders", value: "15%"},
            {name: "Note", value: "40% chance to roll the unit's SWAP/EX variant (if any)." +
            "\nRolling destroyer has a 30% chance to roll Gaia/Garm form"},
        );
        
        //kcco rate page
        const kccoPage = new Discord.MessageEmbed;
        kccoPage.setColor("#4a9745");
        kccoPage.setTitle("Drop Rate of KCCO Units:");
        kccoPage.addFields(
            {name: "Non-boss Units", value: "75%"},
            {name: "Noss Units", value: "20%"},
            {name: "General Carter", value: "2.5%"},
            {name: "Yegor", value: "2.5%"},
        );

        //paradeus rate page
        const paradeusPage = new Discord.MessageEmbed;
        paradeusPage.setColor("#fafafa");
        paradeusPage.setTitle("Drop Rate of Paradeus Units:");
        paradeusPage.addFields(
            {name: "Common Non-boss Units", value: "50%"},
            {name: "Rare Non-boss Units", value: "30%"},
            {name: "Non-Nyto Bosses", value: "10%"},
            {name: "Unnamed Nyto Bosses", value: "6%"},
            {name: "Named Nyto Bosses", value: "4%"},
        );

        //all pages in array
        const pages = [dollPage, equipPage, sfPage, kccoPage, paradeusPage];

        //reaction to change page
        const arrows = ["⬅️", "➡️"];

        //disable page changing after 20 seconds
        const timer = "20000";

        //send pages
        Pagination(rateMsg, pages, arrows, timer);
    }
}