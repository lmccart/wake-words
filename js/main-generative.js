let synthesis, voices, voice;

let lib = {
  instructions: [
    "[motion] through [barrier]",
    "[flipswitch] and see if it [seeif]",
    "[closeyoureyes] and [breathe]",
    "[push] [ground/bodyparts] through [bodyparts]",
    "[closeyoureyes] and [action]",
    "Look [preposition] [noun/bodyparts]",
    "Are you in [multiple] [plurals]?",
    "[check] the [prop] of [noun/bodyparts]",
    "[adverb] count [bodyparts/objects]",
    "Do [others] know your [info]?",
    "Have you [forgot] how to [normalthings/action]?",
    "Are you [comparison] than you should be?",
    "Ask: can [bodyparts/objects] belong to you?",
    "Are you [person]?",
    "Are you [adverb] [location]?",
    "[motion]",
    "try [motion]ing [adverb]",
    "[can] you [motion]?",
    "Can you [motion] with [person/plurals]?",
    "[imagine] you are [state/person]",
    "Can you [do] [objects] you wouldn't [normally/imagine]?",
    "Are you [speaking] without moving [bodyparts]?",
    "Is your [bodyfunction] [comparison] than normal?",
    "Does your [bodyfunction] sound [offpitch]?",
    "Is your [bodyfunction] coming from your [bodyparts]?",
    "Are you doing something [ridiculous]?",
    "Make [others/objects] appear [preposition] you just by [wishing]",
    "Do you have the [bodyfunction] of [person]?",
    "Do you [imagine] [why] you got [location]?",
    "Is this too [adjective] to be [true]?",
    "Can you [imagine] [time]?",
    "Do you know [why] you're [location]?",
    "Is everyone [preposition] you [person]?",
    "try to [push] something [adjective]",
    "[why] have you been [location]?",
    "Are you able to shift [objects] across [room] without going near them?",
    "[flipswitch] without [speaking] it",
    "Do you have any [superpowers] you [forgot] you had?",
    "When you [motion] do you [float]?",
    "[flipswitch] without it [changing]",
    "Greet [person] as if [knowthem]",
    "[action] [person] and [check] if they feel [true]",
    "Are the people around you [wishing/speaking] like [others]?",
  ],

  motion: ["walk", "shuffle", "pace", "float", "drift", "slide", "squeeze", "jump", "levitate", "fly", "reach", "disappear", "fade", "escape", "teleport", "dance", "hear", "respond", "Wander", "Glide", "Gently rise", "Skip", "Vanish", "Transform", "Whisper",  "Emerge", "Hesitate", "Flutter", "reply", "Scroll", "Click", "share", "post", "Save", "Restart", "Type", "Copy", "Paste", "Delete", "Search", "Download", "Upload", "Refresh", "Minimize", "Maximize", "Close", "Open", "Drag", "Zoom", "Undo", "Redo", "Shutdown", "Eject", "Print", "Install", "Uninstall", "Create", "Edit", "View", "Sort", "Filter", "Rotate", "Crop", "Share", "Pin", "Lock", "Unlock", "Sync", "Disconnect", "Connect"],
  float: ["float back down", "hang in the air", "start to fade", "disappear", "notice anything", "transform into something else", "change", "control the elements", "move through time", "visit other places", "become invisible", "defy gravity", "break expectations", "forget you exist"],
  barrier: ["a wall", "a window", "a screen", "a mirror", "a sign", "a light", "a person"],
  flipswitch: ["Flip a light switch", "push a button", "move your arms", "touch something", "retrace your steps", "turn off everything", "press restart", "log off", "read a sentence twice", "check the time", "look out the window"],
  seeif:["works", "breaks", "disappears", "rewinds", "resets", "opens", "closes", "stops", "starts", "pauses"],
  closeyoureyes: ["Close your eyes", "Close your mouth", "Hold your breath", "Touch your face", "Relax your shoulders", "Feel your heartbeat", "Listen to your surroundings", "Stretch your arms", "Pay attention to your thoughts", "Take a deep breath", "Notice your surroundings", "Open your ears", "Release your jaw", "Count your breaths", "Observe your emotions", "Scan your body for tension", "Express gratitude", "list your accomplishments", "Reflect on your goals", "Feel the ground beneath", "Trace your fingers over an object", "Let go of worries"],
  breathe: ["breathe", "inhale", "exhale", "say something", "whisper", "hum softly", "sigh", "smell"],
  ground: ["the ground", "the floor", "the grass", "the walls", "the internet"],
  bodyparts: ["Your finger", "your mouth", "your phone", "Your fingers", "Your palm", "Your hands", "Your head", "Your feet", "Your toes", "Your lips", "Your eyes", "Your ears", "Your nose", "Your chin", "Your cheeks", "Your arms", "Your legs", "Your shoulders", "Your knees", "Your elbows", "Your neck", "Your stomach", "Your back", "Your hips", "Your thighs", "Your shins", "Your ankles", "Your wrists", "Your knuckles", "Your nails", "Your tongue"],
  bodyfunction: ["voice", "vision", "hearing", "sense of taste", "awareness", "perception", "online presence", "identity"],
  push: ["push", "stick", "fit", "slide", "squeeze", "shoot", "lift", "pull", "roll", "post", "erase"],
  action: [ "inhale", "eat", "breathe", "wake up", "hug", "hear", "observe", "notice", "touch", "wake up", "perceive", "inspect", "taste", "see"],
  plurals: ["locations", "places", "times", "days", "personalities", "hands", "Environments", "Settings", "Moments", "Occasions", "Characteristics", "Traits", "Scenarios", "Situations", "Circumstances", "Atmospheres", "Periods", "Dates", "Individuals", "Identities"],
  prop: ["normalcy", "steadiness", "persistence", "color", "age", "smell", "taste", "sound", "density", "shape", "texture", "temperature", "brightness", "opacity", "size", "weight", "speed", "height", "length", "width", "depth", "volume", "intensity", "pattern", "motion", "motion", "movement", "direction", "position", "location", "distance", "duration", "frequency", "rhythm", "tone", "pitch", "melody", "harmony", "contrast", "focus", "emphasis", "shadows", "reflections", "transparency", "viscosity", "hardness", "roughness", "smoothness", "flexibility", "fragility", "elasticity", "viscosity", "opacity", "luminosity", "fragrance", "aroma", "flavor", "bouquet", "spiciness", "blurriness"],
  noun: ["the grass", "the floor", "the air", "the ceiling", "the sun", "the walls", "the people around you", "strangers", "friends", "your clothing", "a mirror", "a closet", "behind a wall", "my face", "your heart", "the past", "the future"],
  adjective: ["good", "loud", "familiar", "wild", "fantastic", "fabulous", "heavy", "invisible", "thrilling", "visible", "melodic", "rhyming", "present", "locked", "surreal", "light", "soft", "invisible", "virtual", "empty", "fleeting"],
  preposition: ["with", "for", "in", "under", "inside", "around", "through", "before", "After", "Between", "Beside", "Beyond", "On top of", "Near", "Across", "Against", "Among", "Amidst", "Within"],
  comparison: ["older", "younger", "hotter", "colder", "warmer", "taller", "more pregnant", "clearer", "blurrier", "fuzzier", "more desirable", "more attractive", "bigger", "smaller", "louder", "quieter", "brighter", "calmer", , "Faster", "Slower", "Lighter", "Sweeter", "smaller", "smarter", "happier", "more secure", "more certain", "sillier", "funnier", "more likable", "more famous"],
  adverb: ["Quickly", "Carefully", "Fully", "Suddenly", "Completely", "Quietly", "Effortlessly", "Deliberately", "Gracefully", "Spontaneously", "Intentionally", "Thoroughly", "Abruptly", "Precisely", "Gently", "Unpredictably", "Methodically", "Rapidly", "Quietly", "Efficiently", "Inexplicably", "Steadily", "Invariably", "Discreetly", "Elegantly", "Relentlessly", "Consistently", "Meticulously", "Unwaveringly", "Effusively", "Decisively", ""],
  check: ["check", "observe", "see", "notice", "reflect on", "check in on", "verify", "test", "question"],
  normalthings: ["do normal things", "talk to strangers", "interact with people", "respond", "remember", "take breaks", "pause", "slow down"],
  person: ["someone else", "yourself", "your mother", "your father", "a stranger", "someone close to you", "a relative", "your sibling", "your friend", "your crush", "your internet friend", "your contact", "your follower"],
  others: ["strangers", "people", "others", "children", "animals", "normal people", "bystanders", "pedestrians", "users", "locals", "friends", "followers"],
  imagine: ["imagine", "pretend", "convince yourself", "forget", "remember", "know", "realize", "understand", "recall", "repress", "delete", "recognize"],
  forgot: ["forgot", "fantasized", "remembered", "realized", "understood", "recalled", "heard", "wished", "noticed", "captured", "collected"],
  state: ["dreaming", "awake", "alive", "here", "somewhere else", "imaginary", "normal", "ok", "Confused", "Curious", "Content", "Anxious", "Relaxed", "Hesitant", "committed"],
  location: ["somewhere else", "here", "over there", "in the future", "in the past", "in yesterday", "in tomorrow", "in two places at once", "In the next room", "In the mirror", "In your mind", "in a memory", "in the present moment", "in your happy place", "in someone else's world", "on your phone", "in your room", "in a simulation"],
  room: ["a room", "your mind", "the floor", "the ceiling", "the wall", "this space", "your network", "the screen", "your awareness", "your home", "time"],
  time: ["Last week", "Yesterday", "Tomorrow", "Next week", "Next year", "Later", "Earlier", "In a moment", "In an hour", "In a few days", "In a month", "In a decade", "In the near future", "In the distant future", "In the recent past", "In a little while", "In the morning", "In the afternoon", "In the evening", "At dusk", "At dawn", "In the afternoon", "During the night"],
  normally: ["normally", "usually", "if you were awake", "if you were dreaming", "In a typical situation", "In reality", "In the real world", "In your everyday experience"],
  ridiculous: ["Silly", "Ridiculous", "Strange", "Incomprehensible", "Excessive", "Sneaky", "Bizarre", "Absurd", "Unbelievable", "Outlandish", "Weird", "Unconventional", "Outrageous", "Eccentric", "Odd", "Peculiar", "Quirky", "Far-fetched", "Offbeat", "Curious", "Unusual", "Off-the-wall", "Crazy", "Wacky", "Wild", "Nonsensical", "Whimsical", "Fanciful", "Preposterous", "right", "wrong"],
  wishing: ["Wishing", "Hoping", "Looking", "Dreaming", "Believing", "Asking", "Imagining", "Desiring", "Yearning", "Longing", "Envisioning", "Visualizing", "Contemplating", "Fantasizing", "Picturing", "Anticipating", "Craving", "Aiming", "Striving", "Musing", "Conceiving", "Daydreaming", "Requesting", "Questioning", "Exploring"],
  speaking: ["speaking", "talking", "eating", "walking", "driving", "dancing", "acting", "touching", "thinking", "breathing", "listening", "hearing", "remembering"],
  objects: ["objects", "things", "other places", "people", "other places", "sensations", "feelings", "memories", "yourself", "words", "thoughts", "facts", "information", "contacts"],
  true: ["True", "Real", "Happening", "Authentic", "Genuine", "Occurring", "Actual", "Factual", "Veritable", "Legitimate", "Tangible", "Substantial", "Valid", "Confirmed", "Validated", "Certified", "Verified", "Concrete", "Existent", "Unquestionable"],
  superpowers: ["Superpowers", "Habits", "Talents", "Desires", "Inconsistencies", "Fears", "Dreams", "Worries", "Aspirations", "Strengths", "Weaknesses", "Passions", "Regrets", "Hobbies", "Quirks", "Goals", "Challenges", "Secrets", "Doubts", "Joys", "memories", "anxieties", "devices", "emotions", "expectations", "doubts", "questions"],
  changing: ["changing", "breaking", "disappearing", "reseting", "crashing", "restarting", "crumbling", "shifting", "generating"],
  knowthem: ["you know them", "you remember them", "you've seen them before", "you are testing them", "you are awake", "you are the same", "you are different", "you connect", "you follow each other", "you are internet friends", "you recognize each other", "you can communicate", "you just met", "you remember them", "you know them", "you feel them"],
  why: ["why", "when", "how", "how much", "how long", "to what extent", "how exactly", "how completely", "when else", "how freely"],
  do: ["do", "say", "hear", "notice", "feel", "remember", "speak to", "touch", "hold", "see", "know", "sense"],
  info: ["name", "id", "username", "voice", "information", "location", "password", "preferences", "favorites", "history", "face", "thoughts"],
  offpitch: ["off pitch", "wrong", "right", "loud", "quiet", "correct", "fuzzy", "blurry", "sharp", "edgy", "late", "off balance"],
  multiple: ["multiple", "different", "simultaneous", "uncertain", "confusing"],
  can: ["can", "will", "do", "how do", "should", "why won't", "won't", "can't", "must"]
};

const scroll_time = 2000;

if ('speechSynthesis' in window) {
  synthesis = window.speechSynthesis;
  synthesis.cancel();
  voices = synthesis.getVoices();
}
synthesis.addEventListener('voiceschanged', () => {
  voices = speechSynthesis.getVoices();
  // console.log(voices);
  // voice = voices.find(voice => voice.name === 'Google US English');
  voice = voices.find(voice => voice.name === 'Samantha');
  console.log(voice);
});

function startGeneration(msg) {
  if (synthesis) {
    synthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.voice = voice;
    utterance.rate = 0.8;
    synthesis.speak(utterance);
  }
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
    // console.log('             ',type);
    if (type.length) {
      let rand = getRandomElement(lib[type]);
      text = text.substring(0, start - 1) + rand + text.substring(end + 1);
    }
  }
  text = cleanup(text);
  return text.toLowerCase();
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
let fadeTime = 1000;
let instructsPerRound = 20;

$(document).ready(init);

function init() {
  $('#instruct').scrollTop(($('.spacer').height() - $('#instruct').height())/2);
  $('#instruct').click(runInstructNext);
}

function instructNext() {
  count++;
  $('#instruct').stop();
  $('#instruct').show();
  let lastI = i;
  while (lastI === i) {
    i = Math.floor(Math.random() * lib.instructions.length);
  }
  let inst = getInstruction(i);
  $('#instruct-span').text(inst);
  resize($('#instruct-span'));
  // scrollDown(inst);
}

function runInstructNext(click) {
  $('#start-span').hide();
  console.log('next')
  instructNext();
}


function resize(target) {
  let size;
  let desired_width = 50;
  let resizer = $('#hidden-resizer');

  resizer.html(target.html());
  resizer.css('font-size', 1000);
  while(resizer.height() > parseInt(target.css('max-height'), 10) || resizer[0].scrollWidth > target.width() + 5) {
    size = parseInt(resizer.css('font-size'), 10);
    size -= 1;
    resizer.css('font-size', size);
  }
  setTimeout(() => {
    target.css('font-size', size);
    target.css('height', resizer.height() - 0.33*size);
    target.css('width', resizer.width());
    // console.log(target.width(), target.height(), resizer.width(), resizer.height(), target.css('font-size'), resizer.css('font-size'))
  }, 100)
}


function scrollDown(inst) {
  $('#instruct').stop();
  $('#instruct').scrollTop(0);
  setTimeout(() => {
    $('#instruct').animate({
      scrollTop: $('#instruct').height()
    }, 1000, 'linear', () => { scrollFinish(inst); });
  }, 100);
}

function scrollFinish(inst) {
  $('#instruct').stop();
  let st = $('#instruct').prop('scrollHeight') - $('#instruct').height();
  console.log(st);
  startGeneration(inst);
  $('#instruct').animate({
    scrollTop: st
  }, 30000, 'linear', instructNext);
}




let tests = [];
let repeated = [];



for (let j=0; j<500; j++) {
  let lastI = i;
  while (lastI === i) {
    i = Math.floor(Math.random() * lib.instructions.length);
  }
  let inst = getInstruction(i);
  if (tests.includes(inst)) {
    repeated.push(inst);
  }
  
  tests.push(inst);
  console.log(inst)
}
console.log(repeated)