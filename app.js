const Discord = require('discord.js');
const client = new Discord.Client();

const {prefix,token} = require ('./config.json'); 
client.login(token)

client.on('ready',() => {
    let sayPagi = client.channels.cache.find(channel => channel.id === '700722339091841137');
    let dayMillseconds = 1000 * 60 * 60 * 24;
    console.log("bot running")

    setInterval(() => {
        sayPagi.send("@everyone Selamat Pagi Sayangku Semua")
    },dayMillseconds)
},leftToEight())

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
}






client.on('message', message=>{
    if (message.content === 'cok') {
              
              message.channel.send('dewe');
            }
    if(message.content === `${prefix}name`){
        message.channel.send(message.guild.name);
    }
    else if(message.content === `${prefix}online`){
        message.channel.send(`Total Members: ${message.guild.memberCount}`);
    }
    else if(message.content === `${prefix}me`){
        message.channel.send({embed:{
            timestamp: new Date(),
            footer: {
              
              text: "© Orang Tua Universe"
            }
        }})
        // message.channel.send(`Username: ${message.author.username}`);
        // message.channel.send(`ID: ${message.author.id}`);
        // message.channel.send(`You Join: ${message.guild.joinedAt}`);
    }
    else if(message.content === `${prefix}server`){
        message.channel.send(`Server Name: ${message.guild.name}`);
        message.channel.send(`ID Guild: ${message.guild.id}`);
        message.channel.send(`Create At: ${message.guild.createdAt}`);
        message.channel.send(`You Join: ${message.guild.joinedAt}`);
        message.channel.send(`Total members: ${message.guild.memberCount}`);


    }
})
