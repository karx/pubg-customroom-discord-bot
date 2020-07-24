const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')
const nameOfAccessRole = "Gaming Squad";
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.author.bot) {
    console.log("Ignore, its a bot");
  } else {
    if (!msg.guild) {
      console.log("Its a DM");
      msg.reply(
        "I would love to chat with you, but, you see, I am busy in-game, in-discord and in not being a human"
      );
    } else if (msg.channel.id === '724992407980081253' || true){
      let isPlayRequest = checkIfPlayRequest(msg.content);
      if (isPlayRequest) {
        let roleToAdd = msg.guild.roles.cache.find(
          (r) => r.name === nameOfAccessRole
        );
        let player = msg.member;

        if (player.roles.cache.some((r) => r.name == nameOfAccessRole)) {
          console.log("Player is already FAM");
          player.send("You are already added");
          msg.reply("I already sent you the details, dont troll my friend");
        } else {
          player.roles.add(roleToAdd);
          player.send({
            content: "Welcome to Gaming Star's Custom Game",
            embed: {
              title: "You are now part of Gaming Squad ",
              description:
                "Custom Room Details to follow. Watch us Live alongside",
              url: "https://www.youtube.com/watch?v=NOE-tB9MHrs",
              color: 11907393,

              footer: {
                icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
                text: "Gaming Stars Discord",
              },
              thumbnail: {
                url: "https://img.youtube.com/vi/NOE-tB9MHrs/0.jpg",
              },
              fields: [
                {
                  name: "Room ID",
                  value: "4912324",
                },
                {
                  name: "Password",
                  value: "city",
                },
                {
                  name: "----",
                  value: "Respect the players",
                },
              ],
            },
          });
          console.log("Added tp Fam");
          msg.reply("DMed you details, plz check");
        }
      }
    } else {
        console.log('GOt msg but not propper channel');
    }
  }
});

function checkIfPlayRequest(msgString) {
  let lowerMsg = msgString.toLowerCase();
  if (
    lowerMsg === "i want to play with gaming stars" ||
    lowerMsg === "i wanna play with gaming stars" ||
    lowerMsg === "add me to custom room" ||
    lowerMsg === "I want to be in gaming squad" ||
    lowerMsg.replace(/\s+/g,'') === "yuktiop" ||
    lowerMsg.replace(/\s+/g,'') === "badeop" ||
    lowerMsg.replace(/\s+/g,'') === "baadeop" ||
    lowerMsg.replace(/\s+/g,'') === "princeop" ||
    lowerMsg.replace(/\s+/g,'') === "xyaaop" 
  )
    return true;
  else return false;
}
function giveUserRoleToPlay(user) {}
client.login(config.bot_secret);
// console.log(config.bot_secret);