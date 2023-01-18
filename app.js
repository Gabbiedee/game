// Assigning vars
let min = 1,
    max = 10,
    winningNum = randomNumber(min, max),
    guessesLeft = 3;


    // declare the UI Variables
    const game= document.querySelector('#game');
    const minNum= document.querySelector('.min-num');
    const maxNum= document.querySelector('.max-num');
    const guessInput= document.querySelector('#guess-input');
    const guessBtn= document.querySelector('#guess-btn');
    const message= document.querySelector('.message')

    // Defining the min and max
    minNum.textContent= min;
    maxNum.textContent= max;

    game.addEventListener('mousedown', function(e) {
      if (e.target.className==='play-again') {
        window.location.reload();
      }
    })

    guessBtn.addEventListener('click', function() {
      let guess= parseInt(guessInput.value);

      if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`${guess} is not within the range of ${min} and ${max}`,  `Red`)  
      } 
      else{ 
        if (guess === winningNum) {
          // guessInput.disabled= true
          // guessInput.style.borderColor= 'Blue'
          gameOver(true, `You won!!! ${winningNum} is correct`, `Blue`)
          
        } else {
          guessesLeft-=1
          if (guessesLeft === 0) {
          //   guessInput.disabled= true
          // guessInput.style.borderColor= 'Red'
          gameOver(false, `You Lost!!! ${guess} is  not correct, ${winningNum} is the right answer`, `Red`);
         
         
          } else {
            guessInput.style.borderColor= 'green'
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,`green`);
            guessInput.value=''
            
          }
          
        }
      }
      
    })
   
    function setMessage(msg, color) {
      message.textContent= msg;
      message.style.color = color;
      
    }
    function gameOver(won, msg) {
      let color;
      won === true ? color = 'blue' : color = 'red'
      message.textContent=msg;
      message.style.color= color;
      guessInput.disabled= true;
      guessInput.style.borderColor= color;
    
      
    guessBtn.value= 'play again';
    guessBtn.className +='play-again';
    }

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }