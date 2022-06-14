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


// eny functions
function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];

}

function generalButtons() {
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

//console.log(answer)

    if(answer.indexOf(chosenLetter) >=0 ){
        guessedWord()
    }
}

function guessedWord(){
    wordStatus = answer.split('').map(letter=> (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus
}


document.getElementById('maxWrong').innerHTML = maxWrong

randomWord();
generalButtons();
guessedWord();
handleGuess()
