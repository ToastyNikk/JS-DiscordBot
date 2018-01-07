const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'Your token goes here';
const PREFIX = '$eval';

bot.login(TOKEN);

bot.on('message', (message) => {
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
                var test = eval(args);
                message.channel.send(test);
            }catch(e){
                message.channel.send('Sorry, that code sucks ass.');
            }
        }

        
    }
});