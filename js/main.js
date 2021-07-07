let instructions = [
  'Try to walk through a wall',
  'Flip a light switch and see if it works',
  'Close your eyes and float off the ground',
  'Push your finger through your palm',
  'Close your mouth and nose and inhale',
  'Look in a mirror',
  'Ask yourself: Are you in multiple locations?',
  'Check the color of the grass',
  'Count your fingers',
  'Look at your hands',
  'Are you able to shift objects across a room or area without going near them?',
  'Flip the light switch without touching it',
  'Make objects appear before you just by wishing',
  'Can you teleport?',
  'Do you have any superpowers you forgot you had?',
  'When you jump, do you float back down?',
  'Read a sentence twice without it changing',
  'Is your vision clearer or blurrier than normal?',
  'Greet a stranger as if you know them and see if they know you',
  'Check: Are the people around you acting like normal people?',
  'Do strangers know your name?',
  'Say something. Does your voice sound off pitch? Is it coming from your mouth?',
  'Have you forgotten how to do normal things? ',
  'Are you doing something ridiculous?',
  'Are you younger or older than you should be?',
  'Are you pregnant?',
  'Do your hands belong to you?'
];


let i = 0;

const font = new FontFaceObserver('botanika-mono-web');
font.load().then(init);

function init() {
  resize($('#intro-span'));
  $('#intro').show();
  $('#intro-ok').click(instruct);
}

function instruct() {
  $('#intro').hide();
  $('#instruct').show();
  instructNext();
}

function instructNext() {
  let lastI = i;
  while (lastI === i) {
    i = Math.floor(Math.random() * instructions.length);
  }
  $('#instruct-span').css('opacity', 0);
  $('#instruct-ok').hide();
  $('#instruct-span').text(instructions[i]);
  resize($('#instruct-span'));
  $('#instruct-span').fadeTo(5000, 1).delay(10000).fadeTo(3000, 0).delay(2000).fadeTo(0, 0, instructNext);
  
}


function resize(target) {
  let size;
  let desired_width = 50;
  let resizer = $('#hidden-resizer');

  resizer.html(target.text());
  resizer.css('font-size', 1000);

  while(resizer.height() > parseInt(target.css('max-height'), 10) || resizer[0].scrollWidth > target.width()) {
    size = parseInt(resizer.css('font-size'), 10);
    size -= 1;
    resizer.css('font-size', size);
  }
  // console.log(resizer.height(),  parseInt(target.css('max-height'), 10), size);
  target.css('font-size', size);
  $('#intro-ok').css('font-size', size);
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
