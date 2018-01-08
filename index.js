const cfg = require('./config/config.json')
const dR = require('./commands/diceRoll.js')
const check = require('./commands/checkCommand.js');
const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = cfg.TOKEN;
const PREFIX = cfg.PREFIX;

const commands = ['!roll', '!ping', '!help'];

bot.login(TOKEN);

bot.on('message', (message) => {
    var com = message.content.split(" ");
    
    var com = check.checkIt(com, commands);

    if(com == commands[0]) {
        var num = dR.droll();
        message.channel.send(num);
    }
    if(com == commands[1]) {
        message.channel.send('`Pong! ' + bot.ping + 'ms`');
    }


    if(message.content.startsWith(PREFIX) && message.author.id !== bot.user.id) {
        var args = message.content.substring(PREFIX.length, message.content.length);
        //message.channel.send(args);
        var string = message.content.toString();

        if (string.includes('embed')) {
            try {
                eval(args);
            }catch(e){
                message.channel.send('Sorry, that code sucks ass');
            }
        }
        else {
            try {
                const test = eval(args);
                message.channel.send('`' + test +'`');
            }catch(e){
                message.channel.send('Sorry, that code sucks ass.');
            }
        }
    }
});