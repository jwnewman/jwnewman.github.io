// Tunes represented as JSON.
var tunes = `[{
  "tunes": [
    {
      "name": "Avery's Jig",
      "time": "Jig",
      "key": "D dor",
      "description": "An early Mark jig written for a roleplay character, who rescued a fiddler from a predicament and received a tune in return.",
      "date": "April 2013",
      "author": "Mark",
      "audio": "averys jig",
      "pdf": "Averys Jig"
    },
    {
      "name": "Behind the Waterfall",
      "time": "Reel",
      "key": "D dor/mix",
      "description": "Jess wrote this one. The name comes from the sound of agonizing and patient practice, best captured by Makar from the Wind Waker (Zelda 2003), who can be heard scratching out an eternal practice session behind a waterfall.",
      "date": "May 2017",
      "author": "Jess",
      "audio": "behind the waterfall",
      "pdf": "Behind the Waterfall"
    },
    {
      "name": "Delilah & Me",
      "time": "Slow reel",
      "key": "G maj",
      "description": "A tune to remember the service dog of a friend and all around Good Girl named <a href=\\"img/delilah.jpg\\" target=\\"_blank\\">Delilah</a>.",
      "date": "May 2018",
      "author": "Mark",
      "audio": "delilah & me",
      "pdf": "Delilah & Me"
    },
    {
      "name": "February Summer",
      "time": "Waltz",
      "key": "D mix",
      "description": "We collaborated on this one to commemorate our friend Derry's birthday, during a February filled with summery days playing music outside. We ended up with a mildly Scandinavian sounding mixolydian waltz.",
      "date": "February 2018",
      "author": "Jess and Mark",
      "audio": "february summer",
      "pdf": "February Summer"
    },
    {
      "name": "Kittelish",
      "time": "Jig",
      "key": "A mix",
      "description": "A 3-part jig, the C part of which came to Mark when he was in a lab meeting. Named because that part sounds just complicated enough and with a sweeping enough chord progression that it reminds us of something Jeremey Kittel might play.",
      "date": "July 2017",
      "author": "Mark",
      "audio": "kittelish",
      "pdf": "Kittelish"
    },
    {
      "name": "Leggy Boy Bat",
      "time": "Jig",
      "key": "D maj",
      "description": "A 4-part jig named after another <a href=\\"https://twitter.com/deaths_cool/status/940263487095361538\\" target=\\"_blank\\">Good Dog</a>. The tune is too long because his legs are too long.",
      "date": "June 2018",
      "author": "Mark",
      "audio": "leggy boy bat",
      "pdf": "Leggy Boy Bat"
    },
    {
      "name": "Made by the Sea",
      "time": "Reel",
      "key": "E mix",
      "description": "Mark wrote this because he was inspired by a <a href=\\"https://clips.twitch.tv/HonestAmazonianStarlingDxAbomb\\" target=\\"_blank\\">legendary stream</a> of Final Fantasy 7 by Shaun and Jen in which Jen asserted her beliefs on how shells are made.",
      "date": "March 2018",
      "author": "Mark",
      "audio": "(a normal shell,) made by the sea",
      "pdf": "(A Normal Shell,) Made by the Sea"
    },
    {
      "name": "Meeting of the Minds",
      "time": "Reel",
      "key": "G mix",
      "description": "We wrote this together after a long visit by Mark to the Bay Area to commemorate a real nice and productive time together. As pointed out by Jess' bandmate Scott, the ending leads into \\"Get Back.\\" Have fun!",
      "date": "May 2018",
      "author": "Jess and Mark",
      "audio": "meeting of the minds",
      "pdf": "Meeting of the Minds"
    },
    {
      "name": "No Sleep Tonight",
      "time": "Reel",
      "key": "F# min",
      "description": "Mark wrote this one because his sleeping habits are terrible. Fondly remembering nights climbing into bed while the birds start screaming outside before dawn. A bit hard to tell whether it's actually F# minor or A major. Either way, starts on a D chord.",
      "date": "Nov 2017",
      "author": "Mark",
      "audio": "no sleep tonight",
      "pdf": "No Sleep Tonight"
    },
    {
      "name": "Reel for Gins the Cat",
      "time": "Reel",
      "key": "D maj",
      "description": "Ode to Mark's cat <a href=\\"img/ginny.gif\\" target=\\"_blank\\">Ginseng</a>. She's extremely fluffy and acts like a princess, but is secretly very sweet.",
      "date": "July 2015",
      "author": "Mark",
      "audio": "reel for gins the cat",
      "pdf": "Reel for Gins the Cat"
    },
    {
      "name": "Spider Jive",
      "time": "Reel",
      "key": "A min",
      "description": "Mark and Derry (from Pepperjack) collaborated on this for Jess's birthday. Somehow it turned into a Halloween tune. Named by Jess for its Undertale vibes.",
      "date": "May 2018",
      "author": "Mark and Derry",
      "audio": "spider jive",
      "pdf": "Spider Jive"
    },
    {
      "name": "The Shot in the Dark",
      "time": "Jig",
      "key": "D dor",
      "description": "A twisty jig named after the ship that our D&D party sailed in during a particularly long arc at sea in which many friends and enemies were made.",
      "date": "February 2018",
      "author": "Mark",
      "audio": "the shot in the dark",
      "pdf": "The Shot in the Dark"
    },
    {
      "name": "Toujours l'Audace",
      "time": "Reel",
      "key": "A dor",
      "description": "Written in honor of Jess's D&D character, Chaszwik. Named after his frankly overpowered ability which allows him to roll about 70 damage dice on every attack. Chaszwik rulz ok.",
      "date": "Nov 2016",
      "author": "Mark",
      "audio": "toujours laudace",
      "pdf": "Toujours lAudace"
    },
    {
      "name": "Tune from Under a Rock",
      "time": "Reel",
      "key": "G maj",
      "description": "Mark wrote this on Christmas Eve. Named for a tune which is well known on the fairy island of Emain Abla (yeah we're talking about D&D again), and often played by a dryad flautist named Felim.",
      "date": "Dec 2017",
      "author": "Mark",
      "audio": "tune from under a rock",
      "pdf": "Tune From Under a Rock"
    },
    {
      "name": "We Dodge Again",
      "time": "Reel",
      "key": "G min",
      "description": "In commemoration of competitive Guild Wars 2 thief player <a href=\\"https://www.youtube.com/watch?v=KDlVYcXoqPA\\" target=\\"_blank\\">Sindrener</a>'s ability to see an enemy thief's intent to steal in his eyes. One of the scarier sounding tunes here. \\"I listened to it [...]\\" - Sindrener.",
      "date": "May 2017",
      "author": "Mark",
      "audio": "we dodge again",
      "pdf": "We Dodge Again"
    }
  ]
}]`
