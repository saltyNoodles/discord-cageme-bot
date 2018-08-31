require('dotenv').config();
const fs = require('fs');

process.on('uncaughtException', function(exception) {
  console.log(exception);
  fs.writeFileSync(`./logs/uncaught-${Date.now()}.log`, exception);
});

const Discord = require('discord.js');
const client = new Discord.Client();
const _ = require('lodash');

const quotes = require('./cage.js');

const genQuote = () => quotes[_.random(0, quotes.length - 1)].quote;

const generateDimensions = () => {
  const n = () => _.random(1000, 1500);
  return `${n()}/${n()}`;
};

const generateCageImage = () => {
  const cageme = _.random(0, 5) != 1;
  console.log(cageme);
  if (cageme) {
    return `http://cageme.herokuapp.com/specific/${_.random(5, 79)}.png`;
  } else {
    return `http://www.placecage.com/g/${generateDimensions()}.png`;
  }
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.includes('cageme')) {
    msg.channel.send(`"${genQuote()}"`, {
      file: generateCageImage()
    });
  } else if (msg.content === 'murrayme') {
    msg.channel.send('', {
      file: `http://www.fillmurray.com/${generateDimensions()}.png`
    });
  }
});

client.login(process.env.DISCORD_BOT_KEY);
