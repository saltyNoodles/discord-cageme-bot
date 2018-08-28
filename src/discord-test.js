const Discord = require('discord.js');
const client = new Discord.Client();
const _ = require('lodash');

const quotes = [
  {
    quote: 'Put... the bunny... back... in the box.',
    source: 'Con-Air'
  },
  {
    quote: "What's in the bag? A shark or something?",
    source: 'The Wicker Man'
  },
  {
    quote: "What do you think I'm gonna do? I'm gonna save the fuckin' day!",
    source: 'Con-Air'
  },
  {
    quote: "Shoot him again... His soul's still dancing.",
    source: 'Bad Lieutenant: Port Of Call'
  },
  {
    quote:
      "OH, NO! NOT THE BEES! NOT THE BEES! AAAAAHHHHH! OH, THEY'RE IN MY EYES! MY EYES! AAAAHHHHH! AAAAAGGHHH!",
    source: 'The Wicker Man'
  },
  {
    quote: "Well, today's your lucky day, 'cause I brought an eagle.",
    source: "The Sorcerer's Apprentice"
  },
  {
    quote: 'You will tell me or I will eat your stinking soul!',
    source: 'Ghost Rider: Spirit of Vengeance'
  },
  {
    quote: 'I love pressure. I eat it for breakfast.',
    source: 'The Rock'
  },
  {
    quote: "What are these fuckin' iguanas doing on my coffee table?",
    source: 'Bad Lieutenant: Port Of Call'
  },
  {
    quote:
      "What's that like? What's it taste like? Describe it like Hemingway.",
    source: 'City of Angels'
  },
  {
    quote:
      'I want to take his face…off.  Eyes. Nose. Skin. Teeth. It’s coming off.',
    source: 'Face-Off'
  },
  {
    quote:
      'I picked two things I really like and put them together. Frankenstein and Cadillacs.',
    source: 'Next'
  },
  {
    quote: 'Well, Peter Piper picked a pepper, I guess I did!',
    source: 'Valley Girl'
  },
  {
    quote: 'How, in the name of Zeus’ butthole, did you get out of your cell?',
    source: 'The Rock'
  },
  {
    quote: 'If you dress like Halloween, ghouls will try to get in your pants.',
    source: 'Face-Off'
  },
  {
    quote: "I'm a one-man genocide.",
    source: 'Lord of War'
  },
  {
    quote:
      "Well, Baby-O, it's not exactly mai-thais and yatzee out here but... let's do it!",
    source: 'Con Air'
  },
  {
    quote: "Tool up, honey bunny. It's time to get bad guys.",
    source: 'Kick Ass'
  },
  {
    quote:
      'I saw you and you saw me, don’t pretend like you don’t know who I am girly man',
    source: 'Snake Eyes'
  },
  {
    quote: 'Everything I take is prescription - except for the heroin.',
    source: 'Bad Lieutenant: Port Of Call'
  },
  {
    quote:
      'I just remembered, I have to go into town to pick up your anti-itch cream.',
    source: "The Sorcerer's Apprentice"
  },
  {
    quote: 'I never disrobe before gunplay.',
    source: 'Drive Angry'
  },
  {
    quote: "I'll be taking these Huggies and whatever cash ya got.",
    source: 'Raising Arizona'
  },
  {
    quote:
      "I told you I'd share my ticket. I never planned on sharing my heart. Maybe I could get lucky twice today.",
    source: 'It Could Happen to You'
  },
  {
    quote:
      "What did I do? You fuck with the bull, you get the horns. That's what I did.",
    source: 'Kiss of Death'
  },
  {
    quote:
      "People don't throw things at me any more. Maybe because I carry a bow around.",
    source: 'The Weather Man'
  }
];

const genQuote = () => quotes[_.random(0, quotes.length)].quote;

const generateDimensions = () => {
  const n = () => _.random(500, 700);
  return `${n()}/${n()}`;
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'cageme') {
    msg.channel.send(`"${genQuote()}"`, {
      file: `http://www.placecage.com/gif/${generateDimensions()}.png`
    });
  } else if (msg.content === 'murrayme') {
    msg.channel.send(`http://www.fillmurray.com/${generateDimensions()}`);
  }
});

client.login('NDg0MDk1MDA0MDc2Mjc3Nzkx.DmdGWw.5WA268hXwbOeKbm-_EM-QdWjU84');
