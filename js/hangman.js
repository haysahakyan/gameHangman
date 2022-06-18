var programming_languages = [
    "python",
    "javascrpipt",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "php",
    "sql",
    "ruby"

]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
      <button
      class="btn btn-lg btn-primary m-2"
      id = '`+ letter + `'
      onClick="handleGuess('`+ letter + `')"
      >
      `+ letter + `
      </button>
      `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML
}
function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    console.log(answer)

    if(answer.indexOf(chosenLetter) >=0 ){
        guessedWord();
        chekIfgameWon()
        //correct image
    }else if(answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        chekIfgameLost();
        updateHangmanPicture()
    }
}
function updateHangmanPicture(){
    // document.getElementById('hangmanPic').src='./images/giphy.gif'
    //images
}
function chekIfgameWon(){
    if(wordStatus === answer){
document.getElementById('keyboard').innerHTML = 'You Won!!';
//put image won
    }
}

function chekIfgameLost(){
    if(mistakes === maxWrong){
        document.getElementById(wordSpotlight).innerHTML = 'The Answer was: ' + answer;
document.getElementById('keyboard').innerHTML = 'You Lost!!';
//put image lost
    }
}
function guessedWord(){
    wordStatus = answer.split('').map(letter=> (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus
}

function updateMistakes(){
    document.getElementById('mistakes').innerHTML = mistakes
}

function reset(){
    mistakes=0;
    guessed=[];

    document.getElementById('hangmanPic').src = './images/giphy.gif';
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons()
    

}

document.getElementById('maxWrong').innerHTML = maxWrong

randomWord();
generateButtons();
guessedWord();
handleGuess()
