const lib = {};
lib.phraseTemplates = [
  "Try to [action] [object].",
  "Flip [object] and see if it [action].",
  "Close your [bodyPart] and [action] off the [element].",
  "Push your [bodyPart] through your [bodyPart].",
  "Look in [object].",
  "Ask yourself: Are you in multiple locations?",
  "Check the color of the [naturalElement].",
  "Count your [bodyPart].",
  "Look at your [bodyPart].",
  "Are you able to shift [object] across [location] without going near them?",
  "Flip [object] without touching it.",
  "Make [object] appear before you just by wishing.",
  "Can you [action] to a different location?",
  "Do you possess any [forgottenPossess] that you've forgotten?",
  "When you jump, do you [action] back down?",
  "Read a [object] twice without it changing.",
  "Is your vision [comparison] normal?",
  "Greet a [personType] as if you know them.",
  "Hug someone close to you and see if they feel real.",
  "Are the people around you acting [adverb]?",
  "Do [personType] know your name?",
  "Does your voice sound [adjective]?",
  "Is your voice coming from your [bodyPart]?",
  "Have you forgotten how to [action] [object]?",
  "Are you doing something [adjective]?",
  "Are you [comparison] than you should be?",
  "Are you experiencing [condition]?",
  "Do your [bodyPart] belong to you?",
  "Do you feel like you are [someoneElse]?",
  "How long have you been [location]?",
  "Check the color of the [skyElement].",
  "Are you [speakingType] without moving your [bodyPart]?",
  "Do you suddenly find yourself [location]?",
  "Attempt to [action] as if you were weightless.",
  "Try to lift [object].",
  "Visualize that you are [action].",
  "Act as if you are [action].",
  "Do you perceive [ownThing] instead of your own?",
  "Recall the circumstances that brought you [location].",
  "Does this seem too [adjective] to be reality?",
  "Can you recall events from [time]?",
  "Do you understand the reason you're [location]?",
  "Are the people around you [adjective]?",
  "Try saying things you typically wouldn't say."
];
lib.preposition = [
  "through",
  "and",
  "off",
  "through",
  "in",
  "in",
  "of",
  "your",
  "at",
  "without",
  "without",
  "any",
  "to a",
  "any",
  "to a different",
  "any",
  "back",
  "a",
  "than",
  "a",
  "someone",
  "like",
  "from your",
  "from your",
  "how to",
  "something",
  "something",
  "you",
  "you",
  "you",
  "to your",
  "you",
  "you",
  "for",
  "your",
  "you",
  "without",
  "without",
  "your",
  "as if",
  "as if",
  "that",
  "as if",
  "your",
  "that brought you",
  "too",
  "from",
  "the reason you're",
  "the",
  "things you typically"
];
lib.action = [
  "walk through",
  "flip",
  "float off",
  "push",
  "inhale",
  "look in",
  "ask",
  "check",
  "count",
  "look at",
  "shift",
  "flip",
  "make",
  "teleport",
  "possess",
  "return",
  "read",
  "see",
  "greet",
  "hug",
  "observe",
  "know",
  "experience",
  "sound",
  "originate",
  "remember",
  "do",
  "act",
  "be",
  "exist",
  "levitate",
  "lift",
  "imagine",
  "pretend",
  "speak",
  "recall",
  "seem",
  "understand",
  "say"
];

lib.object = [
  "a wall",
  "a light switch",
  "the ground",
  "your finger",
  "your palm",
  "a mirror",
  "yourself",
  "the color of the grass",
  "your fingers",
  "your hands",
  "objects",
  "the light switch",
  "a different location",
  "any superpowers",
  "back down",
  "a sentence",
  "your vision",
  "a stranger",
  "someone close to you",
  "people",
  "strangers",
  "your voice",
  "your mouth",
  "normal things",
  "something",
  "something",
  "you",
  "you",
  "you",
  "your body",
  "you",
  "you",
  "how long you've been here",
  "the sky",
  "your lips",
  "your hands",
  "somewhere else",
  "an object",
  "you are dreaming",
  "you are awake",
  "someone else's voice",
  "how you arrived here",
  "reality",
  "last week",
  "your purpose",
  "people",
  "things you wouldn't normally say"
];

lib.article = ["a", "the", "your"];
lib.bodyPart = ["eyes", "mouth", "nose", "finger"];
lib.ownThing = ["voice", "thoughts", "hands", "feet", "fingers", "mouth", "head", "body", "fears", "memories"];
lib.element = ["air", "earth", "water", "fire"];
lib.comparison = ["clearer than", "blurrier than"];
lib.naturalElement = ["sky", "grass"];
lib.personType = ["stranger", "friend", "person"];
lib.adjective = ["real", "dream-like", "different", "normal", "unusual", "good", "true", "unfamiliar"];
lib.adverb = ["normally", "quickly", "strangely", "usually", "slowly"];
lib.condition = ["younger", "older", "pregnant"];
lib.skyElement = ["sky", "atmosphere"];
lib.speakingType = ["speaking", "talking"];
lib.location = ["elsewhere", "somewhere else", "in a new place", "the room"];
lib.time = ["yesterday", "last week", "a month ago", "a year ago", "a decade ago", "your childhood", "a past life"];
lib.someoneElse = ["someone else", "another person"];
lib.forgottenPossess = ["superpowers", "pets", "thoughts"];

function generatePhrase() {
  let text = getRandomElement(lib.phraseTemplates);
  // const phrase = template
  //   .replace(/\[action\]/g, getRandomElement(actions))
  //   .replace(/\[object\]/g, getRandomElement(objects))
  //   .replace(/\[article\]/g, getRandomElement(articles))
  //   .replace(/\[bodyPart\]/g, getRandomElement(bodyParts))
  //   .replace(/\[preposition\]/g, getRandomElement(prepositions))
  //   .replace(/\[element\]/g, getRandomElement(elements))
  //   .replace(/\[comparison\]/g, getRandomElement(comparisons))
  //   .replace(/\[naturalElement\]/g, getRandomElement(naturalElements))
  //   .replace(/\[person\]/g, getRandomElement(personTypes))
  //   .replace(/\[adjective\]/g, getRandomElement(adjectives))
  //   .replace(/\[condition\]/g, getRandomElement(conditions))
  //   .replace(/\[skyElement\]/g, getRandomElement(skyElements))
  //   .replace(/\[speaking\]/g, getRandomElement(speakingTypes))
  //   .replace(/\[location\]/g, getRandomElement(locations))
  //   .replace(/\[time\]/g, getRandomElement(times))
  //   .replace(/\[someoneElse\]/g, getRandomElement(someoneElseTypes))
  //   .replace(/\[forgottenPossess\]/g, getRandomElement(forgottenPossess))
  //   .replace(/\[forgottenPossess\]/g, getRandomElement(forgottenPossess))
  //   .replace(/\s+/g, " ")
  //   .replace(/([?.])\1+/g, "$1") // Remove duplicate punctuation
  //   .trim();

  while (text.includes('[')) {
    let start = text.indexOf('[')+1;
    let end = text.indexOf(']');
    let type = text.substring(start, end);
    console.log('             ',type)
    let rand = getRandomElement(lib[type]);
    text = text.substring(0, start - 1) + rand + text.substring(end + 1);
  }

  if (text.indexOf('Are') === 0 && Math.random() > 0.25) text = 'Check: ' + text;

  return text;
}

console.log("Welcome to the Reality/Dream Test Generator!");
console.log("Here are some generated reality test phrases:");

for (let i = 0; i < 10; i++) {
  const realityTest = generatePhrase();
  console.log(realityTest);
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
