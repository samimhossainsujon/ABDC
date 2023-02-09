
// option 2: add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// onption 3: 

const makBlueBotton = document.getElementById('make-blue');
makBlueBotton.onclick = makBlue;
function makBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3.2:

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option 4:
const PinkButton = document.getElementById('make-pink');
PinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4.2

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});


// Option 5
document.getElementById('Make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
});
