'use strict';

//document.querySelector('.number').textContent = 25;

//document.querySelector('.guess').value=23;

let secretNumber= Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 20;
let highscore=0;

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent="No number"
    }
    else if ( guess === secretNumber){
        document.querySelector('.number').textContent= secretNumber;
        document.querySelector('.message').textContent='You won (:';
        score--;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor='green'
        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;

        }


    }
    else if ( guess > secretNumber){
        if(score > 0){
            alert('No is too high !!')
            document.querySelector('.message').textContent='Number is too high'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent='You lost the game'

        }
    }
    else if (guess < secretNumber){
        if(score > 0){
            alert('No is too low !!').style.backgroundColor='red';

            document.querySelector('.message').textContent='Number is too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent='You lost the game'

    }
}
}

)

document.querySelector('.again').addEventListener
('click', function(){
    secretNumber= Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent= score;
    document.querySelector('body').style.backgroundColor='aqua';


})
