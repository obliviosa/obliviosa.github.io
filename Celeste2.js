var prompts = [
    {
        prompt: '<img src="assets/NA12Fire1.png">',
        a: ['2']
    },
    {
        prompt: '<img src="assets/NA12Fire2.png">',
        a: ['2']
    },
    {
        prompt: '<img src="assets/NA12Ice1.png">',
        a: ['2']
    },
    {
        prompt: '<img src="assets/NA12Ice2.png">',
        a: ['2']
    },
    {
        prompt: '<img src="assets/NA13Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA13Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA13Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA13Ice2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA14Fire1.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA14Fire2.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA14Ice1.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA14Ice2.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA23Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA23Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA23Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA23Ice2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA24Fire1.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA24Fire2.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA24Ice1.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA24Ice2.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA34Fire1.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA34Fire2.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA34Ice1.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA34Ice2.png">',
        a: ['0']
    },
    {
        prompt: '<img src="assets/NA56Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA56Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA56Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA56Ice2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA57Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA57Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA57Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA57Ice2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA58Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA58Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA58Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA58Ice2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA67Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA67Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA67Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA67Ice2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA68Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA68Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA68Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA68Ice2.png">',
        a: ['1']
    },
{
        prompt: '<img src="assets/NA78Fire1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA78Fire2.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA78Ice1.png">',
        a: ['1']
    },
    {
        prompt: '<img src="assets/NA78Ice2.png">',
        a: ['1']
    }
]

var ANSWERS = ['0', '1', '2', '3', '4','5','6'];
var answer = [];
var inputAnswer = [];
var numCorrect = 0; // yeah yeah this naming is confusing
var correct = false;
var lastPrompt = 0;
var timeLimit = 0;
var timeoutEnabled = false;
var timeoutHandle;
// var wrong = 0;

let prompt = document.getElementById('prompt');
let n = Math.floor(Math.random() * prompts.length);
prompt.innerHTML = prompts[n].prompt;
answer = prompts[n].a;

var nextButton = document.getElementById('next');
nextButton.onclick = () => {
    correct = false;
    startTimerIfEnabled();

    let prompt = document.getElementById('prompt');

    prompt.className = 'd-inline';
    ANSWERS.forEach((a) => {
        console.log(a);
        let answerButton = document.getElementById(a);
        answerButton.className = 'btn btn-primary';
    });

    let n = 1 + Math.floor(Math.random() * (prompts.length-1));
    n = (lastPrompt + n) % prompts.length;
    lastPrompt = n;
    prompt.innerHTML = prompts[n].prompt;
    answer = prompts[n].a;
    inputAnswer = [];
}

var answerButtons = document.getElementById('answerButtons');
answerButtons.onclick = (e) => {
    if(e.target.id === 'answerButtons') {return;}
    console.log(e.target.id);
    let a = e.target.id;

    if(a === answer[inputAnswer.length]) {
        document.getElementById(a).className = 'btn btn-success';
        inputAnswer.push(a);

        ANSWERS.forEach((a) => {
            let answerButton = document.getElementById(a);
            a.className = 'btn btn-primary';
        });

        if(inputAnswer.length >= 1) {
            let prompt = document.getElementById('prompt');
            prompt.className = 'd-inline bg-success';

            numCorrect+=1
            correct = true;
        }
    } else {
        e.target.className = 'btn btn-danger';
        numCorrect = 0;
    }
    let streak = document.getElementById('streak');
    streak.innerText = `Streak: ${numCorrect}`;
}

function timerEnableToggled(checkbox)
{
    if(checkbox.checked == true) {
        document.getElementById("timeLimitInput").removeAttribute("disabled");
        timeoutEnabled = true;
        startTimerIfEnabled();
    } else {
        document.getElementById("timeLimitInput").setAttribute("disabled", "disabled");
        timeoutEnabled = false;
        resetTimer();
   }
}

function startTimerIfEnabled() {
    // Reset timer so that users don't fail twice
    resetTimer();

    if (timeoutEnabled) {
        timeLimit = parseInt(document.getElementById('timeLimitInput').value);
        timeoutHandle = setTimeout(failure, timeLimit * 1000);
    }
}

function resetTimer() {
    if (timeoutHandle != null) {
        clearTimeout(timeoutHandle);
        timeoutHandle = null;
    }
}

function failure() {
    if (correct === false) {
        numCorrect = 0;
        let streak = document.getElementById('streak');
        streak.innerText = `Streak: ${numCorrect}`;

        alert("Time out - You died");
    }
}
