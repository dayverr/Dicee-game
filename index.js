var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');
var h1 = document.querySelector('h1');
var random1 = randomNumber1();
var random2 = randomNumber1();

function randomNumber1(){
    return Math.floor(Math.random()*6+1)
}

function changeDice (img, random){
    img.setAttribute('src',`images/dice${random}.png`)
}

function whoWin(number1, number2){
    if(number1===number2){
        h1.textContent = 'Draw!';
    } else if (number1>number2){
        h1.textContent = 'Player 1 Wins!';
    } else h1.textContent = 'Player 2 Wins!';
}


changeDice(dice1, random1);
changeDice(dice2, random2);
whoWin(random1, random2);
