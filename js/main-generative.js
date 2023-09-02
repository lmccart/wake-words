
let lib = {
  instructions: [
    "[motion] through [barrier]",
    "[flipswitch] and see if it [seeif]",
    "[closeyoureyes] and [breathe]",
    "[push] [ground/bodyparts] through [bodyparts]",
    "[closeyoureyes] and [action]",
    "Look [preposition] [noun/bodyparts]",
    "Are you in multiple [plurals]?",
    "[check] the [prop] of [noun/bodyparts]",
    "[adverb] count [bodyparts]",
    "Do [others] know your name?",
    "Have you forgotten how to [normalthings/action]?",
    "Are you [comparison] than you should be?",
    "Ask: can [bodyparts] belong to you?",
    "Are you [person]?",
    "Are you [adverb] [location]?",
    "[motion]",
    "try [motion]ing [adverb]",
    "Can you [motion]?",
    "[imagine] you are [state/person]",
    "Can you say things you wouldn't [normally/imagine]?",
    "Are you [speaking] without moving [bodyparts]?",
    "Is your [bodyfunction] [comparison] than normal?",
    "Does your [bodyfunction] sound off pitch?",
    "Is your [bodyfunction] coming from your mouth?",
    "Are you doing something [ridiculous]?",
    "Make [others/objects] appear [preposition] you just by [wishing]",
    "Do you have someone else's voice?",
    "Do you [imagine] how you got here?",
    "Is this too [adjective] to be [true]?",
    "Can you [imagine] [time]?",
    "Do you know why you're [location]?",
    "Is everyone around you [person]?",
    "try to [push] something [adjective]",
    "How long have you been [location]?",
    "Are you able to shift objects across a room without going near them?",
    "[flipswitch] without touching it",
    "Do you have any superpowers you forgot you had?",
    "When you jump do you float back down?",
    "Read a sentence twice without it changing",
    "Greet a stranger as if you know them",
    "[action] [person] and [check] if they feel [true]",
    "Are the people around you [wishing/speaking] like [others]?",
  ],

  motion: ["walk", "pace", "float", "drift", "slide", "squeeze", "jump", "levitate", "fly", "reach", "disappear", "fade", "escape", "teleport", "dance"],
  barrier: ["a wall", "a window", "a screen"],
  flipswitch: ["Flip a light switch", "touch something", "retrace your steps"],
  seeif:["works", "breaks", "disappears", "rewinds",],
  closeyoureyes: ["Close your eyes", "Close your mouth", "Hold your breath", "Touch your face"],
  breathe: ["breathe", "inhale", "exhale", "say something", "whisper", "hum softly"],
  ground: ["the ground", "the floor", "the grass"],
  bodyparts: ["your finger", "your fingers", "your palm", "your hands", "your head", "your feet", "your toes", "your lips"],
  bodyfunction: ["voice", "vision", "hearing", "sense of taste", "awareness"],
  push: ["push", "stick", "fit", "slide", "squeeze", "shoot", "lift", "pull", "roll"],
  action: [ "inhale", "eat", "breathe", "wake up", "hug"],
  plurals: ["locations", "places", "times", "days", "personalities", "hands"],
  prop: ["normalcy", "steadiness", "persistence", "color", "age", "smell", "taste", "sound", "density", "shape", "texture", "temperature", "brightness", "opacity", "size", "weight", "speed", "height", "length", "width", "depth", "volume", "intensity", "pattern", "motion", "motion", "movement", "direction", "position", "location", "distance", "duration", "frequency", "rhythm", "tone", "pitch", "melody", "harmony", "contrast", "focus", "emphasis", "shadows", "reflections", "transparency", "viscosity", "hardness", "roughness", "smoothness", "flexibility", "fragility", "elasticity", "viscosity", "opacity", "luminosity", "fragrance", "aroma", "flavor", "bouquet", "spiciness", "blurriness"],
  noun: ["the grass", "the floor", "the air", "the ceiling", "the sun", "the walls", "the people around you", "strangers", "friends", "your clothing", "a mirror", "a closet", "behind a wall", "my face", "your heart", "the past", "the future"],
  adjective: ["good", "loud", "familiar", "wild", "fantastic", "fabulous", "heavy", "invisible"],
  preposition: ["for", "at", "in", "under", "inside", "around", "through", "before"],
  comparison: ["older", "younger", "hotter", "colder", "warmer", "taller", "more pregnant", "clearer", "blurrier", "fuzzier"],
  adverb: ["quickly", "carefully", "fully", "suddenly", "completely", ""],
  check: ["check", "observe", "see", "notice", "reflect on", "check in on", "verify", "test"],
  normalthings: ["do normal things", "talk to strangers", "interact with people", "respond", "remember"],
  person: ["someone else", "yourself", "your mother", "your father", "a stranger", "someone close to you"],
  others: ["strangers", "people", "others", "children", "animals", "normal people"],
  imagine: ["imagine", "pretend", "convince yourself", "forget", "remember", "know"],
  state: ["dreaming", "awake", "alive", "here", "somewhere else", "imaginary", "normal", "ok"],
  location: ["somewhere else", "here", "over there", "in the future", "in the past", "in yesterday", "in tomorrow", "in two places at once"],
  time: ["last week", "yesterday", "tomorrow", "next week", "next year", "later", "earlier"],
  normally: ["normally", "usually", "if you were awake", "if you were dreaming"],
  ridiculous: ["silly", "ridiculous", "strange", "incomprehensible", "excessive", "sneaky"],
  wishing: ["wishing", "hoping", "looking", "dreaming", "believing", "asking", "imagining"],
  speaking: ["speaking", "talking", "eating", "walking", "driving", "dancing", "acting", "touching"],
  objects: ["objects", "things", "other places"],
  true: ["true", "real", "happening"],
};

let socketid = '';
let msgid = '';
const domain = 'https://what-to-say.xyz';
const socket = io(domain);

socket.on('connect', () => {
  socketid = socket.id;
});

socket.on('sample', (data) => {
  console.log(data);
  console.log('msgid', msgid);
  if (msgid === data.id) {
    play(data.url, data.msg);
  }
});

function startGeneration(msg) {
  fetch(`${domain}/generateSpeech?msg=${msg}&socketid=${socketid}&type=ww`)
  .then(result => result.json())
  .then(result => {
    msgid = result.id;
  }, (err) => { console.log(err); });
}

function play(url, msg, type) {
  console.log('play ', url)
  sound.src = url;
  sound.play();
}



function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getInstruction() {
  let text = getRandomElement(lib.instructions);
  text = addExtra(text);

  while (text.includes('[')) {
    let start = text.indexOf('[')+1;
    let end = text.indexOf(']');
    let type = text.substring(start, end);
    if (type.includes('/')) {
      types = type.split('/');
      type = Math.random() < 0.5 ? types[0]: types[1];
    }
    // console.log('             ',type)
    if (type.length) {
      let rand = getRandomElement(lib[type]);
      text = text.substring(0, start - 1) + rand + text.substring(end + 1);
    }
  }
  text = cleanup(text);
  return text;
}

function addExtra(text) {
  let n = Math.random();
  if (text.indexOf('[instruction]') === 0 && n < 0.25) {
    text = 'Try to ' + text;
  }

  if (text.indexOf('Are') === 0 || text.indexOf('Is') === 0) {
    if (n < 0.25) text = 'Check: ' + text;
    else if (n < 0.5) text = 'Ask yourself: ' + text;
  }
  return text;
}

function cleanup(text) {
  text = text.replace('eing', 'ing');
  return text;
}


let sound = document.querySelector('#audio');

let i = 0;
let count = 0;
let rotateTimeout;
let rotateTimeoutDur = 23000;
let fadeTime = 3000;
let introTime = 23000;
let instructsPerRound = 100;

$(document).ready(init);

function init() {
  resize($('#intro-span')); 
  $('#intro').click(runInstructNext);
  $('#instruct').click(runInstructNext);
  intro();
}

function intro() {
  count = 0;
  if (rotateTimeout) clearTimeout(rotateTimeout);
  $('#intro').stop(true).fadeTo(fadeTime, 1.0, 'linear');

  setTimeout(() => {
    $('#intro').stop(true).fadeTo(fadeTime, 0, 'linear', instructNext);
  }, introTime);
}

function instructNext() {
  count++;
  if (count > instructsPerRound) {
    intro();
  } else {
    $('#instruct').show();
    let lastI = i;
    while (lastI === i) {
      i = Math.floor(Math.random() * lib.instructions.length);
    }
    let inst = getInstruction(i);
    startGeneration(inst);
    $('#instruct-span').css('opacity', 0);
    $('#instruct-ok').hide();
    $('#instruct-span').text(inst);
    resize($('#instruct-span'));
    $('#instruct-span').fadeTo(fadeTime, 1, 'linear');
    // setTimeout(() => { playAudio(i); }, 1200);
    if (rotateTimeout) clearTimeout(rotateTimeout);
    rotateTimeout = setTimeout(runInstructNext, rotateTimeoutDur);
  }
}

function runInstructNext(click) {
  let ft = click ? 500 : fadeTime;
  $('#intro').stop(true).fadeTo(ft, 0, 'linear');
  $('#instruct-span').stop(true).fadeTo(ft, 0, 'linear').delay(1000).fadeTo(0, 0, instructNext);
}


function resize(target) {
  let size;
  let desired_width = 50;
  let resizer = $('#hidden-resizer');

  resizer.html(target.html());
  resizer.css('font-size', 1000);

  while(resizer.height() > parseInt(target.css('max-height'), 10) || resizer[0].scrollWidth > target.width() + 50) {
    size = parseInt(resizer.css('font-size'), 10);
    size -= 1;
    resizer.css('font-size', size);
  }
  // console.log(resizer.height(),  parseInt(target.css('max-height'), 10), size);
  target.css('font-size', size);
  target.css('height', resizer.height());
  target.css('width', resizer.width());
  // console.log(target.width(), target.height(), resizer.width(), resizer.height(), target.css('font-size'), resizer.css('font-size'))
}
