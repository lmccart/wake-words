let lib = {};
lib.instructions = [
  'Try to $verb$ through a $noun$',
  'Flip a $noun$ and see if it works',
  'Close your $pluralnoun$ and $verb$ off the ground',
  'Push your $noun$ through your $noun$',
  'Close your $noun$ and $verb$',
  'Look in a $noun$',
  'Ask yourself: Are you $phrase$?',
  'Check the $property$ of the $noun$',
  'Count your $pluralnoun$',
  'Look at your $noun$',
  // 'Are you able to shift objects across a room or area without going near them?',
  'Flip the $noun$ without $gerund$ it',
  'Make objects appear before you just by $gerund$',
  'Can you $verb$?',
  // 'Do you have any superpowers you forgot you had?',
  // 'When you jump, do you float back down?',
  // 'Read a sentence twice without it changing',
  // 'Is your vision clearer or blurrier than normal?',
  // 'Greet a stranger as if you know them',
  // 'Hug someone close to you and see if they feel real',
  // 'Check: Are the people around you acting like normal people?',
  // 'Do strangers know your name?',
  // 'Does your voice sound off pitch?',
  // 'Is your voice coming from your mouth?',
  // 'Have you forgotten how to do normal things? ',
  // 'Are you doing something ridiculous?',
  'Are you $adjective$ than you should be?',
  // 'Are you pregnant?',
  // 'Do your hands belong to you?',
  // 'Are you someone else?',
  // 'How long have you been here?',
  // 'Check the color of the sky',
  // 'Are you speaking without moving your lips?',
  // 'Are you talking without moving your hands?',
  // 'Are you suddenly somewhere else?',
  // 'Fly',
  // 'Try to lift something heavy',
  'Imagine you are $gerund$',
  // 'Pretend you are awake',
  'Do you have someone else\'s $noun$?',
  // 'Do you remember how you got here?',
  // 'Is this too good to be true?',
  'Can you remember $time$?',
  // 'Do you know why you\'re here?',
  // 'Is everyone around you a stranger?'
];

lib.noun = [
  'wall',
  'ground',
  'light switch',
  'finger',
  'palm',
  'mouth',
  'nose',
  'mirror',
  'grass',
  'voice'
];

lib.pluralnoun = [
  'eyes',
  'fingers',
  'hands',
]

lib.time = [
  'last week',
  'yesterday',
  'this morning',
  'tomorrow'
]

lib.property = [
  
  'color',
]

lib.verb = [
  'walk',
  'float',
  'inhale',
  'teleport'
];

lib.gerund = [
  'wishing',
  'touching',
  'seeing',
  'dreaming'
]

lib.adjective = [
  'older',
  'younger',
  'hotter',
  'colder',
  'warmer',
  'taller'

];

lib.phrase = [
  'in multiple locations'
]


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

  resizer.html(target.text());
  resizer.css('font-size', 1000);

  while(resizer.height() > parseInt(target.css('max-height'), 10) || resizer[0].scrollWidth > target.width() + 50) {
    size = parseInt(resizer.css('font-size'), 10);
    size -= 1;
    resizer.css('font-size', size);
  }
  // console.log(resizer.height(),  parseInt(target.css('max-height'), 10), size);
  target.css('font-size', size);
  target.css('height', resizer.height() - 0.33 * size);
  $('#intro-ok').css('font-size', size);
}

function playAudio(i) {
  let n = String(i).padStart(2, '0');
  sound.src = `audio/wake-words-${n}.mp3`;
  console.log(sound.src);
  sound.play();
}


function getInstruction(i) {
  let text = lib.instructions[i];
  while (text.includes('$')) {
    console.log('TEXT ', text)
    let start = text.indexOf('$')+1;
    let end = text.indexOf('$', start);
    console.log(start, end)
    let type = text.substring(start, end);
    let arr = lib[type];
    console.log(type)
    console.log(arr)
    let rand = arr[Math.floor(Math.random() * arr.length)];
    text = text.substring(0, start - 1) + rand + text.substring(end + 1);
  }
  return text;
}




// let circle = new ProgressBar.Circle('#progress', {
//   strokeWidth: 6,
//   easing: 'linear',
//   duration: 5000,
//   color: '#FFEA82',
//   trailColor: '#eee',
//   trailWidth: 1,
//   svgStyle: null
// });
// circle.animate(1.0);  // Number from 0.0 to 1.0
