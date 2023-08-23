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
    // "Are you able to shift objects across a room or area without going near them?",
    // "Flip the light switch without touching it",
    // "Make objects appear before you just by wishing",
    // "Can you teleport?",
    // "Do you have any superpowers you forgot you had?",
    // "When you jump do you float back down?",
    // "Read a sentence twice without it changing",
    // "Is your vision clearer or blurrier than normal?",
    // "Greet a stranger as if you know them",
    // "Hug someone close to you and see if they feel real",
    // "Check: Are the people around you acting like normal people?",
    // "Do strangers know your name?",
    // "Does your voice sound off pitch?",
    // "Is your voice coming from your mouth?",
    // "Have you forgotten how to do normal things? ",
    // "Are you doing something ridiculous?",
    "Are you [comparison] than you should be?",
    // "Do your hands belong to you?",
    // "Are you someone else?",
    // "How long have you been here?",
    // "Check the color of the sky",
    // "Are you speaking without moving your lips?",
    // "Are you talking without moving your hands?",
    // "Are you suddenly somewhere else?",
    // "Fly",
    // "lift something heavy",
    // "Imagine you are dreaming",
    // "Pretend you are awake",
    // "Do you have someone else's voice?",
    // "Do you remember how you got here?",
    // "Is this too good to be true?",
    // "Can you remember last week?",
    // "Do you know why you're here?",
    // "Is everyone around you a stranger?",
    // "Can you say things you wouldn't normally?"
  ],

  motion: ["walk", "run", "float", "drift", "slide", "squeeze", "jump", "levitate", "fly", "reach"],
  barrier: ["a wall", "a window", "a screen"],
  flipswitch: ["Flip a light switch", "touch something", "retrace your steps"],
  seeif:["works", "breaks", "disappears", "rewinds",],
  closeyoureyes: ["Close your eyes", "Close your mouth", "Hold your breath", "Touch your face"],
  breathe: ["breathe", "inhale", "exhale", "say something", "whisper", "hum softly"],
  ground: ["the ground", "the floor", "the grass"],
  bodyparts: ["your finger", "your fingers", "your palm", "your hands", "your head", "your feet", "your toes", "your mouth"],
  push: ["push", "stick", "fit", "slide", "squeeze", "shoot", "lift", "pull", "roll"],
  action: [ "inhale", "eat", "breathe", "wake up"],
  plurals: ["locations", "places", "times", "days", "personalities", "hands"],
  prop: ["normalcy", "steadiness", "persistence", "color", "age", "smell", "taste", "sound", "density", "shape", "texture", "temperature", "brightness", "opacity", "size", "weight", "speed", "height", "length", "width", "depth", "volume", "intensity", "pattern", "motion", "motion", "movement", "direction", "position", "location", "distance", "duration", "frequency", "rhythm", "tone", "pitch", "melody", "harmony", "contrast", "focus", "emphasis", "shadows", "reflections", "transparency", "viscosity", "hardness", "roughness", "smoothness", "flexibility", "fragility", "elasticity", "viscosity", "opacity", "luminosity", "fragrance", "aroma", "flavor", "bouquet", "spiciness", "blurriness"],
  noun: ["the grass", "the floor", "the air", "the ceiling", "the sun", "the walls", "the people around you", "strangers", "friends", "your clothing", "a mirror", "a closet", "behind a wall", "my face", "your heart", "the past", "the future"],
  preposition: ["for", "at", "in", "under", "inside", "around", "through"],
  comparison: ["older", "younger", "hotter", "colder", "warmer", "taller", "more pregnant"],
  adverb: ["quickly", "carefully", "fully"],
  check: ["check", "observe", "notice", "reflect on", "check in on", "verify"]
};



// time: [
//   'last week',
//   'yesterday',
//   'this morning',
//   'tomorrow'
// ],

// gerund: [
//   'wishing',
//   'touching',
//   'seeing',
//   'dreaming'
// ],

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generatePhrase() {
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
    let rand = getRandomElement(lib[type]);
    text = text.substring(0, start - 1) + rand + text.substring(end + 1);
  }
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

for (let i = 0; i < 30; i++) {
  const realityTest = generatePhrase();
  console.log(realityTest);
}

