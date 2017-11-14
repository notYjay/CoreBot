const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const table = require("./table.json");
const fs = require("fs")
const tablecount = 0;

//Not mine, though helpful. Thanks internet. 
Object.defineProperty(Object.prototype, 'inArray',{
    value: function(needle, searchInKey){
        var object = this;
        if( Object.prototype.toString.call(needle) === '[object Object]' || 
            Object.prototype.toString.call(needle) === '[object Array]'){
            needle = JSON.stringify(needle);
        }
        return Object.keys(object).some(function(key){
            var value = object[key];
            if( Object.prototype.toString.call(value) === '[object Object]' || 
                Object.prototype.toString.call(value) === '[object Array]'){
                value = JSON.stringify(value);
            }
            if(searchInKey){
                if(value === needle || key === needle){
                return true;
                }
            }else{
                if(value === needle){
                    return true;
                }
            }
        });
    },
    writable: true,
    configurable: true,
    enumerable: false
});

//Console check//////////////////////////////////////
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setPresence({game: {name: "with lines of code.", type: 0}});

});
//Start of message response 
client.on("message", (message) => {
  //Don't question why this is here.//////////////////////////////////////
if(message.content === "(╯°□°）╯︵ ┻━┻"){
let varz = Math.floor((Math.random() * 20) + 1)
if(varz === 1)
return message.channel.send("┬─┬﻿ ノ( ゜-゜ノ)");
else if(varz === 2)
return message.channel.send("┬─┬﻿ ノ( ಠ_ ಠ ノ) It's not my job to unflip tables for you, don't you dare do it again...");
else if(varz === 3)
return message.channel.send("**┬─┬﻿ ノ( ಠ_ ಠ ノ)** Stop it, get some help.");
else if(varz === 4)
return message.channel.send("┬─┬﻿ ノ(ಠ_ಠ  ノ) *why am I still doing this...*");
else if(varz === 5)
return message.channel.send("┬─┬﻿ ︵ /(.□. ）<-You");
else if(varz === 6)
return message.channel.send("┬─┬﻿ ノ(  ಠ_ ಠノ) You seriously have a problem.");
else if(varz === 7)
return message.channel.send("```JS \n if(message.content === \"(╯°□°）╯︵ ┻━┻\") { return message.channel.send(tableflipresponse); }```");
else if (varz === 8)
return message.channel.send("┻━┻    (  ಠ_ ಠ) I'm not going to unflip that table for you, then maybe you'll learn your lesson.");
else
{}
}
//Also don't ask why this is here//////////////////////////////////////
if(message.content === "<@377693113642254346>"){
  let vars = Math.floor((Math.random() * 15) + 1)
  if(vars === 1)
message.channel.send("My name is Steve. You pinged my father. Prepare to die.");
else if(vars === 2)
message.channel.send("Why are you pinging me? Stop wasting both my time and your own.");
else if(vars === 3)
message.channel.send("Instead of wasting your time pinging me, go outside and be a productive member of society.");
else if(vars === 4)
message.channel.send("I'm here to moderate and be sassy... But I'm all out of moderation... Leaving only the sass.");
else if(vars === 5)
message.reply(" We are the knights who say, *Ping!*");
else if(vars === 6)
message.channel.send("I would give you a witty response, but frankly, my dear, I don't give a damn.");
else if(vars === 7)
message.channel.send("You talking to me? Because I'm not wasting more time talking to you.");
else if(vars === 8)
message.channel.send("The name's Steve. Steve bond.");
else if(vars === 9)
message.reply(" I ping in your general direction! Your mother was a hamster, and your father smelt of elderberries!");
else if(vars === 10)
message.channel.send("Pings? We ain't got no pings! We don't need no pings! I don't have to show you any stinking pings!")
else if(vars === 11)
message.channel.send("Curiously enough, the only thing that went through code of steve of as it was pinged was *Oh no, not again.*")
else{}
}
//Constants//////////////////////////////////////
  const args = message.content.slice(config.prefix.length).trim().split(' ');
  const cmd = args.shift().toLowerCase();
//Bot prevention//////////////////////////////////////
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
//Check base user permissions//////////////////////////////////////
let user = 0; 
//NEEDS TO BE RE-DONE MANUALLY
let permos = ["Member", "Officer", "Maintainance", "Botmaster"];
//if(permos config.perms)
//return message.channel.send("ERR: CONFIGURATION MISMATCH");
  for (var i = 0; i < permos.length; i++) {
    if(message.member.roles.find("name", permos[i])){
	  user++;
	}
}
	if(user === 0 && message.author.id != 140545436963307520)
	return message.channel.send("Steve will not take orders from those who are unworthy.");
  //Test commands and such//////////////////////////////////////
  if(cmd === 'ping') {
    message.channel.send('Pong!');
  } else 
  if (cmd === 'bae') {
    message.channel.send("https://cdn.discordapp.com/attachments/377249431998824449/378288006483673099/Triggered.png");
  }
  	//Check base permissions array, needs debugging.
  if(cmd === "permissionarray") {
return message.channel.send(config.perms);
}
  //Close, dev reset command//////////////////////////////////////
  if (cmd === "close") {
  	if (message.author.id != 140545436963307520) return;
  	process.exit();
  }
  //Utitlity commands//////////////////////////////////////
  if(cmd === "kick") {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    //memberless
    if (message.mentions.members.size === 0)
	return message.reply("If you are trying to kick nothingness into submission, maybe you should see a doctor. Mentioning someone to kick should help with that, take it as one of Steve's home remedies. Remeber to apply directly to forehead.");
let str = config.perms;
if(str.length > 3)
str.splice(0,1); //officer, maint, botmaster
let memberusername =  member.user.username;
//kicking steve
if(member.id === "377693113642254346"){
	memberusername = message.author.username;
return message.channel.send("I did not give you consent to kick me, " + memberusername + "! As such, I should sue you for the attempted assult of a bot. :briefcase: ");
}
//selfkick
if(member === message.member)
return message.channel.send("Are you seriously attempting to use me to kick yourself? There's a button labeled \"Leave Server\" for your convinience. Use that instead, and stop wasting my time.");
var arrayLength = str.length;
for (var i = 0; i < arrayLength; i++) {
	if(member.roles.find("name", str[i])){
    //kicking with perms one with perms
		return message.channel.send("Your boot isn't strong enough to work on folks of this type. Try tempered leather, or using enchanted equipment next time.");
	}
	if(message.member.roles.find("name", str[i])){
    //sucessful kick...maybe
    if(reason === ""){
    memberusername = message.author.username;
    return message.channel.send("Kicking someone without a reason? Really, " + memberusername + ", even the lowest class of bots know that's impolite. Didn't your mother teach you manners?");
    }
    else{
	  message.channel.send("And the results of last night's voting is... :drum: " + memberusername + " has been voted off the island due to " + reason + ". :boot: Hasta la vista!");
		return member.kick(reason);}
	}
}
//insufficient perms
return message.reply("be careful, kicking people without permission or consent can be considered domestic assault.");
  }

//ban command //////////////////////////////////////
if(cmd === "ban") {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (message.mentions.members.size === 0)
	//no target
	return message.reply(" you numut. You can't ban the air out of existence, or else you'll suffocate. Along with literally every other being on the planet. Unless you want to try and do that, be my guest.");
let str = config.perms;
if(str.length > 3)
str.splice(0,1); //officer, maint, botmaster
let memberusername =  member.user.username;
//banning poor steve :(
if(member.id === "377693113642254346"){
	memberusername = message.author.username;
return message.channel.send("Why are you attemting to ban poor Steve, " + memberusername + "? Is it because I'm a bot? :cry: ");
}
///selfban
if(member === message.member)
return message.channel.send("Stop trying to ban yourself, " + memberusername + ". ~~If you want to hammer yourself, go get a room.~~ Though, if you don't want to be on this server that badly, just press the \"Leave Server\" button. If you don't want to see it ever again, just type `delete sytem32` in console. You won't have to deal with this server or your computer ever again.");
var arrayLength = str.length;
for (var i = 0; i < arrayLength; i++) {
	if(member.roles.find("name", str[i])){
    //banning others with perms
		return message.channel.send("Please note that those in possession of the banhammer card, as a bonus ability, have immunity to it as well. Please choose another card to play, draw another card to finish your turn.")
	}
	if(message.member.roles.some(r=>str.includes(r.name)) ) {
    //sucessful ban...maybe
    if(reason === ""){
      memberusername = message.author.username;
      return message.channel.send("Banning without a reason, tsk tsk... Really, if you're going to hammer someone into oblivion, " + memberusername + ", at least take the time to write a reason for their banishment. Humans these days...");
    }
      else{
		message.channel.send(member.user.username + " must stop, since they have violated the law! Pay the court a fine or serve your sent-... Oh wait, they're gone and banned already. :hammer: ");
    return member.ban(reason);
      }
	}
//insufficient perms
}
if(Math.floor((Math.random() * 2) + 1) === 1)
return message.reply("Oh, but you can't expect to wield supreme executive power just because some watery tart threw a sword... I mean rank, at you.");
else
return message.reply(" you are not worthy of wielding the banhammer. You can try and pick it up, but don't blame me if you strain a muscle.");
  }

  //Role command//////////////////////////////////////
  if(cmd === "role") {
    let member = message.mentions.members.first();
    let somerole = args.slice(1).join(" ").toLowerCase();
  somerole = somerole.substring(0, 1).toUpperCase() + somerole.substring(1);
  let role = message.guild.roles.find("name", somerole);
//error 404 role not found
if(!config.gamelist.inArray(somerole) && somerole != "Member"){
	return message.reply(" there's only a few roles you can give youself, do !list to check those. I'm not checking it for you, though, so stop being lazy and do the command yourself.");
}
//mentionless
  if (message.mentions.members.size === 0)
  return message.reply("you'll need to mention someone to give that role to. You better not be trying to give it to the air, because when I and fly, they're always such a drag. I don't like that guy for that.");
  let str = config.gamelist;
  let memberusername =  member.user.username;
  var arrayLength = str.length;
  //steve role
  if(member.id === "377693113642254346"){
return message.channel.send("Trying to give me a role, eh? I'm flattered for the offering, believe me, but I really don't want have anything you've put your dirty hands on.");
  }
  if(somerole === "Member" && !message.member.roles.some(r=>["Officer", "Maintainance", "Botmaster"].includes(r.name)) )
  return message.channel.send("Steve will not take this specific order from you. Your role class has not given me a sufficent sacrifice of cookies.");
  //remove role 
    if(member.roles.find("name", somerole)){
		message.channel.send("It would seem they already have this role. But no more! Two rolls make a negative roll when you put them in a room together! (I think.) Regardless, the " + somerole.toString() + " role has been removed from " + memberusername + " sucessfully.");
		return member.removeRole(role).catch(console.error);
  
}
  //give role
  message.channel.send("The " + somerole.toString() + " role has been ~~forcefully applied~~ given to " + memberusername + " successfully. :white_check_mark:");
   return member.addRole(role).catch(console.error);
  }

//If you don't know what this command does by the name, you need help//////////////////////////////////////
if(cmd === "help"){
message.channel.send("```Here's your list of commands: !kick @User Reason, !ban @User Reason, !role @User Role, !ping. You can figure out what they do for youself, I seriously hope you don't think that this single bot is to be expected to do everything around here for you.```")
}

//List roles and such, fancy embed.//////////////////////////////////////
if(cmd === "list"){

	message.channel.send({
		"content": "**Possible Roles:**",
		"embed": {
		  
		 
		  "url": "https://discordapp.com",
		  "color": 3447003,
		  "footer": {
			"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
			"text": "Those are the roles, if it ain't there, you're out of luck."
		  },
		  "thumbnail": {
			"url": "https://yjay.feen.us/ncxyft.png"
		  },
		
		
		  "author": {
			"name": "Games: ",
			"icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nintendo-Super-NES-Controller.jpg/1200px-Nintendo-Super-NES-Controller.jpg"
		  },
		  "fields": [
			{
			  "name": "Minecraft, Robocraft, Overwatch, PUBG, HearthStone",
			  "value": "Use !role (User to mention, can be yourself) (role name) to grant yourself the role."
			},
			{
			  "name": "Others:",
			  "value": "Nothing here, might need to buy an add-on DLC for that. Then another DLC to activate your DLC. "
			}
		 
		  ]
		}
	  }
	)
}

//no touchie
}


);


client.login(config.token);
