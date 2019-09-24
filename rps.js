//set base scores
let userScore = 0;
let computerScore = 0;

// Genrate userChoice
function user(){
  let userChoice = this.id
  console.log("User choice is " + userChoice);

  document.getElementById('inputchoice').innerHTML = "You have chosen " + this.getAttribute('data-name');

  computer(userChoice);
};

// generate computerChoice
function computer(userChoice) {
  let computerRand = '';

    computerRand = Math.floor(Math.random() * 3);

  if (computerRand === 0) {
    computerChoice = 'rockbutton'
    document.getElementById('status').innerHTML = "The computer chose Rock!"

  } else if (computerRand === 1){
    computerChoice = 'paperbutton'
    document.getElementById('status').innerHTML = "The computer chose Paper!"
  } else {
    computerChoice = 'scissorsbutton'
    document.getElementById('status').innerHTML = "The computer chose Scissiors!"
  };

  console.log("Choices are: " + userChoice + " " + computerChoice)

  comparison(userChoice, computerChoice)
}

//compare user choice with computer choice to determine outcome

function comparison(userChoice, computerChoice) {
  if (userChoice === 'rockbutton') {
    if (computerChoice === 'rockbutton'){
      document.getElementById('result').innerHTML = "The result is: A tie - good game!";
      console.log("tied game");
    } else if (computerChoice === 'paperbutton') {
      document.getElementById('result').innerHTML = "The result is: You lose - better luck next time!";
      console.log("lost game");
      computerScore++;
      document.getElementById('computerScore').innerHTML = computerScore;
    } else if (computerChoice === 'scissorsbutton') {
      document.getElementById('result').innerHTML = "The result is: You win - well done!";
      console.log("won game")
      userScore++;
      document.getElementById('userScore').innerHTML = userScore;
    }

  } else if (userChoice==='paperbutton'){
      if (computerChoice === 'rockbutton'){
        document.getElementById('result').innerHTML = "The result is: You win - well done!";
        console.log("won game");
        userScore++;
        document.getElementById('userScore').innerHTML = userScore;
      } else if (computerChoice === 'paperbutton') {
        document.getElementById('result').innerHTML = "A tie - good game!";
        console.log("tied game");
      } else if (computerChoice === 'scissorsbutton') {
        document.getElementById('result').innerHTML = "The result is: You lose - better luck next time!";
        console.log("lost game");
        computerScore++;
        document.getElementById('computerScore').innerHTML = computerScore;
      }


  } else if (userChoice==='scissorsbutton'){
      if (computerChoice === 'rockbutton'){
        document.getElementById('result').innerHTML = "The result is: You lose - better luck next time!";
        console.log("lost game");
        computerScore++;
        document.getElementById('computerScore').innerHTML = computerScore;

      } else if (computerChoice === 'paperbutton') {
        document.getElementById('result').innerHTML = "The result is: You win - well done!";
        console.log("won game");
        userScore++;
        document.getElementById('userScore').innerHTML = userScore;

      } else if (computerChoice === 'scissorsbutton') {
        document.getElementById('result').innerHTML = "A tie - good game!";
        console.log("tied game")
      };
    }


  }
// reset game
document.getElementById('resetbutton').onClick = resetGame;

function resetGame(){
  userScore = 0
  computerScore = 0
  console.log("reset")
};

//inistialise game
function init() {
  document.getElementById('rockbutton').onclick = user;
  document.getElementById('paperbutton').onclick = user;
  document.getElementById('scissorsbutton').onclick = user;
  console.log('initialised')
}

init();

// reset game
document.getElementById('resetbutton').onclick = resetGame;

function resetGame(){
  userScore = 0
  document.getElementById('userScore').innerHTML = userScore
  computerScore = 0
  document.getElementById('computerScore').innerHTML = computerScore
  console.log("reset")
};
