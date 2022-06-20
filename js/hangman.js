var programming_languages = [
    "c",
    "java",
    "javascript",
    "php",
    "go",
    "python",
    "ruby",
    "sql",
    "csharp",
    "swift",
    "assembly",
    "scratch",

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
      class="btn btn-hover color-11 btn-lg  m-2"
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
        
//document.getElementById('hangmanPic').src = './images/goodJobgif.gif'

document.getElementById('hangmanPic').src='./images/ok.png'
    }else if(answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes();
        chekIfgameLost();
        // updateHangmanPicture()
        document.getElementById('hangmanPic').src='./images/x.png'
    }
    
console.log(mistakes)
}
//function updateHangmanPicture(){
    // document.getElementById('hangmanPic').src='./images/giphy.gif'
    //images
//}
function chekIfgameWon(){
    if(wordStatus === answer){
document.getElementById('keyboard').innerHTML = 'You Won!!';
    }
}

function chekIfgameLost(){
    if(mistakes === maxWrong){
        document.getElementById('wordSpotlight').innerHTML = 'The Answer was: ' + answer;
document.getElementById('keyboard').innerHTML = 'You Lost!!';
//put image lost
document.getElementById('hangmanPic').src = './images/xkkkk.png';
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
//handleGuess()

console.log(answer +"11111")
