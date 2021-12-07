// Players
const playerDeku = {
    name: 'circle1',
    distance: 0,
}
const playerBakugou = {
    name: 'circle2',
    distance: 0,
}
const playerTodoroki = {
    name: 'circle3',
    distance: 0,
}

// Player Images
var dekuImg = document.getElementById("circle1");
var bakugouImg = document.getElementById("circle2");
var todorokiImg = document.getElementById("circle3");
var finishLine = (window.innerWidth - (window.innerWidth * 0.20));


// Generates a random number between a min value and a max value
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// function to move the player at a random speed
function movePlayer() {
    // Generates random number for move
    move1 = getRandomArbitrary(100,300);
    move2 = getRandomArbitrary(100,300);
    move3 = getRandomArbitrary(100,300);
    // Adds move to players distance
    playerDeku.distance += move1;
    playerBakugou.distance += move2;
    playerTodoroki.distance += move3;
    // Actually moves the player
    dekuImg.style.left = playerDeku.distance + "px";
    bakugouImg.style.left = playerBakugou.distance + "px";
    todorokiImg.style.left = playerTodoroki.distance + "px";
}

function startGame() {
    document.getElementById('redLight').src='green_light.png';

    if (playerDeku.distance >= finishLine) {
        console.log("Deku Wins!");
        document.getElementById('background_img').src='deku_winning.png';
        document.getElementById("mainText").innerHTML = "Deku Wins! Click on his image to play again!";
    } else if (playerBakugou.distance >= finishLine) {
        console.log("Bakugo Wins!");
        document.getElementById('background_img').src='bakugo_winning.png';
        document.getElementById("mainText").innerHTML = "Bakugo Wins! Click on his image to play again!";
    } else if (playerTodoroki.distance >= finishLine) {
        console.log("Todoroki Wins!");
        document.getElementById('background_img').src='todoroki_winning.png';
        document.getElementById("mainText").innerHTML = "Todoroki Wins! Click on his image to play again!";
    } else {
        setTimeout(startGame, 500);
        movePlayer();
    }

}

function resetGame() {
    document.getElementById('background_img').src='mha_background.jfif';
    document.getElementById('redLight').src='red_light.png';
    playerDeku.distance = 0;
    playerBakugou.distance = 0;
    playerTodoroki.distance = 0;
    dekuImg.style.left = 0 + "px";
    bakugouImg.style.left = 0 + "px";
    todorokiImg.style.left = 0 + "px";
    document.getElementById("mainText").innerHTML = "Click on the stoplight to begin the game!";
} 

