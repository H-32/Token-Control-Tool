const { Client } = require('discord.ts-selfbot');
const client = new Client();
const { token , prefix , developers} = require('./src/token');


/*
token.forEach(tokens => {

client.on('ready', async () => {
     console.log(`Was Login in : ${client.user.tag}`)
     console.log("                   __                          ")
     console.log("  _ __  _ __ ___  / _| ___  ___ ___  ___  _ __ ")
     console.log(" | '_ \| '__/ _ \| |_ / _ \/ __/ __|/ _ \| '__|")
     console.log(" | |_) | | | (_) |  _|  __/\__ \__ \ (_) | |   ")
     console.log(" | .__/|_|  \___/|_|  \___||___/___/\___/|_|   ")
     console.log(" |_| ")
})

 client.on('message', async message => {
          if(message.content.startsWith(`${prefix}server-leave`)) {
               if (!developers.includes(message.author.id)) return;
               let args = message.content.split(" ")[1];
               if(!args) return message.channel.send("Please send a id server to leave")
               let Guild = client.guilds.cache.get(args)
               if(!Guild) return message.channel.send("Invalid Server ID")
               Guild.leave();
               message.author.send(`Done i leave from the server ✅`)
          }
})


client.on("message", async message => {
     var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    if(message.content.startsWith(`${prefix}setG`)) {
         client.user.setActivity(argresult)
         await message.channel.send(`${argresult} - Was Change`)
    } else {
         if(message.content.startsWith(`${prefix}SetW`)){
              client.user.setActivity(argresult, { type:"WATCHING"});
             await message.channel.send(`${argresult} - Was Change`)
         } else {
          if(message.content.startsWith(`${prefix}SetL`)){
               client.user.setActivity(argresult, { type:"LISTENING"});
               await message.channel.send(`${argresult} - Was Change`)
         } else {
          if(message.content.startsWith(`${prefix}SetS`)){
               client.user.setActivity(argresult, { type:"STREAMING", url:"https://www.twitch.tv/rascon_x"});
               await message.channel.send(`${argresult} - Was Change`)
         }
         }
     }
    }
})
     client.login(tokens);
});



/*
client.on('message', async message => {
     if(message.content.startsWith(`${prefix}join`)) {
          if(!developers.includes(message.author.id)) return;
          const channel = message.member.voice.channel;
          if(message.member.voice.channel) {
               const connection = await message.member.voice.channel.join();
               message.delete({ timeout: 1000})
               if(connection) return message.channel.send(`I'm Join to : ${channel}`).then((m) => {
                    m.delete({ timeout: 1000})
               })
          }
     } else {
          if(message.content.startsWith(`${prefix}leave`)) {
               if(!developers.includes(message.author.id)) return;
               const channel = message.member.voice.channel;
               if(message.member.voice.channel) {
                    const connection = await message.member.voice.channel.leave();
                    message.delete({ timeout: 1000})
                    if(connection) return message.channel.send(`I'm leave from : ${channel}`).then((m) => {
                         m.delete({ timeout: 1000})
                    })
               }
          }
     }
})
*/

//Token leave from the server or change the state
var _0xd6ba=["\x72\x65\x61\x64\x79","\x57\x61\x73\x20\x4C\x6F\x67\x69\x6E\x20\x69\x6E\x20\x3A\x20","\x74\x61\x67","\x75\x73\x65\x72","","\x6C\x6F\x67","\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5F\x5F\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20","\x20\x20\x5F\x20\x5F\x5F\x20\x20\x5F\x20\x5F\x5F\x20\x5F\x5F\x5F\x20\x20\x2F\x20\x5F\x7C\x20\x5F\x5F\x5F\x20\x20\x5F\x5F\x5F\x20\x5F\x5F\x5F\x20\x20\x5F\x5F\x5F\x20\x20\x5F\x20\x5F\x5F\x20","\x20\x7C\x20\x27\x5F\x20\x7C\x20\x27\x5F\x5F\x2F\x20\x5F\x20\x7C\x20\x7C\x5F\x20\x2F\x20\x5F\x20\x2F\x20\x5F\x5F\x2F\x20\x5F\x5F\x7C\x2F\x20\x5F\x20\x7C\x20\x27\x5F\x5F\x7C","\x20\x7C\x20\x7C\x5F\x29\x20\x7C\x20\x7C\x20\x7C\x20\x28\x5F\x29\x20\x7C\x20\x20\x5F\x7C\x20\x20\x5F\x5F\x2F\x5F\x5F\x20\x5F\x5F\x20\x20\x28\x5F\x29\x20\x7C\x20\x7C\x20\x20\x20","\x20\x7C\x20\x2E\x5F\x5F\x2F\x7C\x5F\x7C\x20\x20\x5F\x5F\x5F\x2F\x7C\x5F\x7C\x20\x20\x5F\x5F\x5F\x7C\x7C\x5F\x5F\x5F\x2F\x5F\x5F\x5F\x2F\x5F\x5F\x5F\x2F\x7C\x5F\x7C\x20\x20\x20","\x20\x7C\x5F\x7C\x20","\x6F\x6E","\x6D\x65\x73\x73\x61\x67\x65","\x73\x65\x72\x76\x65\x72\x2D\x6C\x65\x61\x76\x65","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x20","\x73\x70\x6C\x69\x74","\x50\x6C\x65\x61\x73\x65\x20\x73\x65\x6E\x64\x20\x61\x20\x69\x64\x20\x73\x65\x72\x76\x65\x72\x20\x74\x6F\x20\x6C\x65\x61\x76\x65","\x73\x65\x6E\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x67\x65\x74","\x63\x61\x63\x68\x65","\x67\x75\x69\x6C\x64\x73","\x49\x6E\x76\x61\x6C\x69\x64\x20\x53\x65\x72\x76\x65\x72\x20\x49\x44","\x6C\x65\x61\x76\x65","\x44\x6F\x6E\x65\x20\x69\x20\x6C\x65\x61\x76\x65\x20\x66\x72\x6F\x6D\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72\x20\u2705","\x6A\x6F\x69\x6E","\x73\x6C\x69\x63\x65","\x73\x65\x74\x47","\x73\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79","\x20\x2D\x20\x57\x61\x73\x20\x43\x68\x61\x6E\x67\x65","\x53\x65\x74\x57","\x57\x41\x54\x43\x48\x49\x4E\x47","\x53\x65\x74\x4C","\x4C\x49\x53\x54\x45\x4E\x49\x4E\x47","\x53\x65\x74\x53","\x53\x54\x52\x45\x41\x4D\x49\x4E\x47","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x77\x69\x74\x63\x68\x2E\x74\x76\x2F\x72\x61\x73\x63\x6F\x6E\x5F\x78","\x6C\x6F\x67\x69\x6E","\x66\x6F\x72\x45\x61\x63\x68"];token[_0xd6ba[44]]((_0xb34ex1)=>{client[_0xd6ba[12]](_0xd6ba[0],async ()=>{console[_0xd6ba[5]](`${_0xd6ba[1]}${client[_0xd6ba[3]][_0xd6ba[2]]}${_0xd6ba[4]}`);console[_0xd6ba[5]](_0xd6ba[6]);console[_0xd6ba[5]](_0xd6ba[7]);console[_0xd6ba[5]](_0xd6ba[8]);console[_0xd6ba[5]](_0xd6ba[9]);console[_0xd6ba[5]](_0xd6ba[10]);console[_0xd6ba[5]](_0xd6ba[11])});client[_0xd6ba[12]](_0xd6ba[13],async (_0xb34ex2)=>{if(_0xb34ex2[_0xd6ba[16]][_0xd6ba[15]](`${_0xd6ba[4]}${prefix}${_0xd6ba[14]}`)){if(!developers[_0xd6ba[19]](_0xb34ex2[_0xd6ba[18]][_0xd6ba[17]])){return};let _0xb34ex3=_0xb34ex2[_0xd6ba[16]][_0xd6ba[21]](_0xd6ba[20])[1];if(!_0xb34ex3){return _0xb34ex2[_0xd6ba[24]][_0xd6ba[23]](_0xd6ba[22])};let _0xb34ex4=client[_0xd6ba[27]][_0xd6ba[26]][_0xd6ba[25]](_0xb34ex3);if(!_0xb34ex4){return _0xb34ex2[_0xd6ba[24]][_0xd6ba[23]](_0xd6ba[28])};_0xb34ex4[_0xd6ba[29]]();_0xb34ex2[_0xd6ba[18]][_0xd6ba[23]](`${_0xd6ba[30]}`)}});client[_0xd6ba[12]](_0xd6ba[13],async (_0xb34ex2)=>{var _0xb34ex5=_0xb34ex2[_0xd6ba[16]][_0xd6ba[21]](`${_0xd6ba[20]}`)[_0xd6ba[32]](1)[_0xd6ba[31]](_0xd6ba[20]);if(!developers[_0xd6ba[19]](_0xb34ex2[_0xd6ba[18]][_0xd6ba[17]])){return};if(_0xb34ex2[_0xd6ba[16]][_0xd6ba[15]](`${_0xd6ba[4]}${prefix}${_0xd6ba[33]}`)){client[_0xd6ba[3]][_0xd6ba[34]](_0xb34ex5); await _0xb34ex2[_0xd6ba[24]][_0xd6ba[23]](`${_0xd6ba[4]}${_0xb34ex5}${_0xd6ba[35]}`)}else {if(_0xb34ex2[_0xd6ba[16]][_0xd6ba[15]](`${_0xd6ba[4]}${prefix}${_0xd6ba[36]}`)){client[_0xd6ba[3]][_0xd6ba[34]](_0xb34ex5,{type:_0xd6ba[37]}); await _0xb34ex2[_0xd6ba[24]][_0xd6ba[23]](`${_0xd6ba[4]}${_0xb34ex5}${_0xd6ba[35]}`)}else {if(_0xb34ex2[_0xd6ba[16]][_0xd6ba[15]](`${_0xd6ba[4]}${prefix}${_0xd6ba[38]}`)){client[_0xd6ba[3]][_0xd6ba[34]](_0xb34ex5,{type:_0xd6ba[39]}); await _0xb34ex2[_0xd6ba[24]][_0xd6ba[23]](`${_0xd6ba[4]}${_0xb34ex5}${_0xd6ba[35]}`)}else {if(_0xb34ex2[_0xd6ba[16]][_0xd6ba[15]](`${_0xd6ba[4]}${prefix}${_0xd6ba[40]}`)){client[_0xd6ba[3]][_0xd6ba[34]](_0xb34ex5,{type:_0xd6ba[41],url:_0xd6ba[42]}); await _0xb34ex2[_0xd6ba[24]][_0xd6ba[23]](`${_0xd6ba[4]}${_0xb34ex5}${_0xd6ba[35]}`)}}}}});client[_0xd6ba[43]](_0xb34ex1)})
//Join and leave from the voice
var _0xee18=["\x6D\x65\x73\x73\x61\x67\x65","","\x6A\x6F\x69\x6E","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x69\x64","\x61\x75\x74\x68\x6F\x72","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x63\x68\x61\x6E\x6E\x65\x6C","\x76\x6F\x69\x63\x65","\x6D\x65\x6D\x62\x65\x72","\x64\x65\x6C\x65\x74\x65","\x74\x68\x65\x6E","\x49\x27\x6D\x20\x4A\x6F\x69\x6E\x20\x74\x6F\x20\x3A\x20","\x73\x65\x6E\x64","\x6C\x65\x61\x76\x65","\x49\x27\x6D\x20\x6C\x65\x61\x76\x65\x20\x66\x72\x6F\x6D\x20\x3A\x20","\x6F\x6E"];client[_0xee18[17]](_0xee18[0],async (_0x4193x1)=>{if(_0x4193x1[_0xee18[4]][_0xee18[3]](`${_0xee18[1]}${prefix}${_0xee18[2]}`)){if(!developers[_0xee18[7]](_0x4193x1[_0xee18[6]][_0xee18[5]])){return};const _0x4193x2=_0x4193x1[_0xee18[10]][_0xee18[9]][_0xee18[8]];if(_0x4193x1[_0xee18[10]][_0xee18[9]][_0xee18[8]]){const _0x4193x3= await _0x4193x1[_0xee18[10]][_0xee18[9]][_0xee18[8]][_0xee18[2]]();_0x4193x1[_0xee18[11]]({timeout:1000});if(_0x4193x3){return _0x4193x1[_0xee18[8]][_0xee18[14]](`${_0xee18[13]}${_0x4193x2}${_0xee18[1]}`)[_0xee18[12]]((_0x4193x4)=>{_0x4193x4[_0xee18[11]]({timeout:1000})})}}}else {if(_0x4193x1[_0xee18[4]][_0xee18[3]](`${_0xee18[1]}${prefix}${_0xee18[15]}`)){if(!developers[_0xee18[7]](_0x4193x1[_0xee18[6]][_0xee18[5]])){return};const _0x4193x2=_0x4193x1[_0xee18[10]][_0xee18[9]][_0xee18[8]];if(_0x4193x1[_0xee18[10]][_0xee18[9]][_0xee18[8]]){const _0x4193x3= await _0x4193x1[_0xee18[10]][_0xee18[9]][_0xee18[8]][_0xee18[15]]();_0x4193x1[_0xee18[11]]({timeout:1000});if(_0x4193x3){return _0x4193x1[_0xee18[8]][_0xee18[14]](`${_0xee18[16]}${_0x4193x2}${_0xee18[1]}`)[_0xee18[12]]((_0x4193x4)=>{_0x4193x4[_0xee18[11]]({timeout:1000})})}}}}})