A simple api to configure and enhance the ways on coding your discord bot. Compatible with discord.js v12 but it should also work on older versions. Variety of different usages for this api.

<div align="center">
  <p>
    <a href="https://nodei.co/npm/slicy-discordbot">NPM INFO</a>
  </p>
</div>

---

## Installation

First install [Node.js](http://nodejs.org/). Then:

```sh
$ npm install slicy-discordbot
```

## ✈ Importing

```javascript
// Using Node.js `require()`
const slicy= require("slicy-discordbot");

// Using ES6 imports
import slicy from "slicy-discordbot";
```

## 🙋‍♂️ Support

Feel free to join the support discord server -> https://discord.gg/8M9fhmeUzM

---

## 🔧 Usages

---

## DaysAgo

```javascript
// Example on checking how long the member's account was created.
// Import the package
const slicy = require("slicy-discordbot");
// Destructure the package
const daysAgo = slicy.DaysAgo;
const discord = require("discord.js");

client.on("guildMemberAdd", async (member) => {
    console.log(daysAgo(member.user.createdAt)); // return days.
});
```

## ReactionPages

#### Example :

```js
// Example on checking how long the member's account was created.
// Import the package
const slicy = require("slicy-discordbot");
// Destructure the package
const ReactionPages = slicy.ReactionPages;
// Use either MessageEmbed or RichEmbed to make pages
// Keep in mind that Embeds should't have their footers set since the pagination method sets page info there
const { MessageEmbed } = require("discord.js");
const embed1 = new MessageEmbed().setTitle("1");
const embed2 = new MessageEmbed().setTitle("2");
// Create an array of embeds.
const pages = [embed1, embed2];
// Change pages when sending numbers.
const textPageChange = true;
// Create an emojilist, first emoji being page back and second emoji being page front. Defaults are set to  ['⏪', '⏩'].
const emojis = ["⏪", "⏩"];
// Define a time in ms, defaults are set to 60000ms which is 60 seconds. Time on how long you want the embed to be interactable
const time = 30000;
// Call the ReactionPages method, use the <message> parameter to initialize it.
ReactionPages(msg, pages, textPageChange, emojis, time);
//There you go, now you have embed pages.
```


---

## Confirmation

```js
// destructure the package
const { confirmation } = require("slicy-discordbot");
// Here is an example on using it in banning members.
message.channel.send("Confirmation for banning members").then(async (msg) => {
    // parameters used(which msg to react on, who can acess it, reactions, time(optional))
    const emoji = await confirmation(msg, ["✅", "❌"], 30000);
    if (emoji === "✅") {
        //if author reacts on check
        //delete the confirmation message
        msg.delete();
        //ban the member
        guildMember.ban();
    }
    if (emoji === "❌") {
        // if author reacts on cross
        // delete the confirmation message
        msg.delete();
    }
});
```

---

## fetchTranscript

```js
// destructure the package
const { MessageAttachment } = require("discord.js");
const { fetchTranscript } = require("slicy-discordbot");

// here is how you use it

// template
// fetchTranscript(message: any, numberOfMessages: number, sendToAuthor: boolean)

// returns buffer

//example
module.exports = {
    name: "transcript",
    run: async (client, message) => {
        fetchTranscript(message, 5).then((data) => {
            const file = new MessageAttachment(data, "index.html");
            message.channel.send(file);
        });
    },
};
// it will fetch 5 messages in the current channel.
```

---

## timeout

```js
// destructure the package
const { timeout } = require("slicy-discordbot");

// example

const messageToDelete = await message.channel.send("Hello There 👋");

// using the method
// template => timeout(message: who can acess, msgToDelete: which message to delete,time: time before the emoji gets deleted)
timeout(message, messageToDelete, 5000); // only message.author can areact, messageToDelete is going to deleted if collected reactions, if no reactions after 5 seconds the reaction will be removed.
```


---

## chatBot

```js
const { chatBot } = require("slicy-discordbot");

/** @parameters
 * message, message.channel
 * input, input to give
 */

// example

chatBot(message, args.join(" "));
```
---

## hangman

```js
//importing
const { hangman } = require("slicy-discordbot");

// parameters
/**
 * @name hangman
 * @param {Object} options options
 * @param {String} [options.channelID] channel to send to (channel.id)
 * @param {any} [options.message] parameter used for message event
 * @param {String} [options.permission] required permission to use this command (optional); default set to everyone.
 * @param {String} [options.word] word that needed to be guessed
 * @param {any} [options.client] client used to defined Discord.Client
 */

// making hangman
const hang = new hangman({
    message: message,
    word: args.slice(1).join(" "),
    client: client,
    channelID: message.mentions.channels.first(),
});

// starting the game
hang.start();
```

## tictactoe

```js
//importing
const { tictactoe } = require("slicy-discordbot");

// parameters
/**
 * @name tictactoe
 * @param {Object} options options
 * @param {any} [options.message] parameter used for message event
 * @param {any} [options.player_two] second player in the game.
 */

// start the game

var game = new tictactoe({
    message: message,
    player_two: message.mentions.members.first(),
});
```

---

---

---

# oldSlicyDB

## 1. Importing the package

```js
const { oldSlicyDB } = require("slicy-discordbot");
// or
import { oldSlicyDB } from "slicy-discordbot";
```

## 2. Establishing and exporting oldSlicyDB

```js
const db = new oldSlicyDB({
    uri: "your mongodb connection string",
});

module.exports = db;
```

## 3. Example on using it

```js
const db = require("./db.js"); // replace db.js with the file path to oldSlicyDB

db.set("numbers", "123");
```

## Methods

### .set

```js
// saves data to database
db.set("key", "value");
```

### .get

```js
// gets value from key
db.get("key"); // returns => value
```

### .has

```js
// returns boolean
db.has("key"); // returns => true
```

### .delete

```js
// deletes data
db.delete("key");

// checking for data
db.has("key"); // returns => false
```

---

# slicyDB

## 1. Importing the package

```js
const { slicyDB } = require("slicy-discordbot");
// or
import { slicyDB } from "slicy-discordbot";
```

## 2. Establishing and exporting slicyDB

```js
const db = new slicyDB(client, {
    uri: "your mongodb connection string",
});

module.exports = db;
```

## 3. Example on using it

```js
const db = require("./db.js"); // replace db.js with the file path to slicyDB

db.set("numbers", "123");
```

## Methods

### .set

```js
// saves data to database
db.set("key", "value");
```

### .get

```js
// gets value from key
db.get("key"); // returns => value
```

### .has

```js
// returns boolean
db.has("key"); // returns => true
```

### .delete

```js
// deletes data
db.delete("key");

// checking for data
db.has("key"); // returns => false
```

### .collection

```js
//returns the cached data
console.log(slicyDB.collection())
```

---

# GiveawayClient

## Initialising the client

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { GiveawayClient } = require('slicy-discordbot');

  /**
   * @name GiveawayClient
   * @kind constructor
   * @param {Client} client
   * @param {Object} options Options
   * @param {String} [options.mongoURI] mongodb connection string
   * @param {String} [options.emoji] emoji for reaction (must be a unicode)
   * @param {String} [options.defaultColor] default colors for giveaway embeds
   * @description Initiating the giveaway client
   */

const giveaway = new GiveawayClient(client, {
  mongoURI?
  emoji?
  defaultColor?
});

module.exports = giveaway;
```

## Methods

### start

```js
/**
 * @method
 * @param {Object} options options
 * @param {TextChannel} [options.channel] Channel for the giveaway to be in
 * @param {Number} [options.time] Duration of this giveaway
 * @param {User} [options.hostedBy] Person that hosted the giveaway
 * @param {String} [options.description] Description of the giveaway
 * @param {Number} [options.winners] Amount of winners for the giveaway
 * @param {String} [options.prize] Prize for the  giveaway
 */
```

### end

```js
/**
 * @method
 * @param {String} MessageID Message ID for the giveaway
 * @param {Boolean} getWinner Choose a winner?
 * @description End a giveaway, choose a winner (optional)
 */
```

### reroll

```js
/**
 * @method
 * @param {String} channel channel of the giveaway
 * @param {String} id message id
 * @param {Number} winners amount of winners
 * @description Change the winners for a giveaway!
 */
```

### getCurrentGiveaways

```js
/**
 * @method
 * @param {Boolean} activatedOnly display activated giveaways only?
 * @param {Boolean} all display giveaways of  all guilds?
 * @param {Message} message message if (all = false)
 * @description Get data on current giveaways hosted by the bot
 */
```

### removeCachedGiveaways

```js
/**
 * @method
 * @param {Boolean} all Get data from all guilds?
 * @param {String} guildID guild id if all=false
 * @description Removes (activated = false) giveaways
 */
```
