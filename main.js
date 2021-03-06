//initialise discord.js
const Discord = require ("discord.js");

//initialise client
const client = new Discord.Client();

//set bot prefix
const prefix = "=";

//initialise fs
const fs = require("fs");

//initialise commands
client.commands = new Discord.Collection();

//read .js files in the commands folder
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//feedback when bot is started up
client.once("ready", () => {
    console.log("GFL Bot is online!");
})

//run commands
client.on("message", message => {

    //reply whenever bot is being described as rigged
    rig = message.content.toLowerCase();
    if(rig.includes("rigged"))
    {
        const rigEmbed = new Discord.MessageEmbed;
        rigEmbed.setColor("#2f3136");
        rigEmbed.setTitle(message.member.user.tag);
        rigEmbed.setDescription("Did you call me rigged? Just roll better lmao..." +
        "\nPretty sure your parents wanted to roll a better child.");
        message.channel.send(rigEmbed);
        return 0;
    }

    //check prefix
    if(!message.content.startsWith(prefix) || message.author.bot)
    {
        return
    };

    //if prefix is correct, read the command from user
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //switch statement for all commands
    switch (command)
    {    
        //run help.js
        case "help":
            client.commands.get("help").execute(message, args);
            break;

        //run doll.js
        case "doll":
            client.commands.get("doll").execute(message, args);
            break;

        //run equip.js
        case "equip":
            client.commands.get("equip").execute(message, args);
            break;

        //run sf.js
        case "sf":
            client.commands.get("sf").execute(message, args);
            break;

        //run kcco.js
        case "kcco":
            client.commands.get("kcco").execute(message, args);
            break;

        //run paradeus.js
        case "paradeus":
            client.commands.get("paradeus").execute(message, args);
            break;

        //run rate.js
        case "rate":
            client.commands.get("rate").execute(message, args);
            break;

        //run rateup.js
        case "rateup":
            client.commands.get("rateup").execute(message, args);
            break;

        //run nytobap.js
        case "nytobap":
            client.commands.get("nytobap").execute(message, args);
            break;

        //run junya.js
        case "junya":
            client.commands.get("junya").execute(message, args);
            break;

        //run dolltime.js
        case "dolltime":
            const dolltime = "=dolltime ";
            const timer = message.content.slice(dolltime.length).split(/ +/);
            module.exports.timer = timer;
            client.commands.get("dolltime").execute(message, args, timer);
            break;
    }

})

//bot token
client.login(process.env.token);