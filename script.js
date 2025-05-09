let score = 0;
let gameInterval;
let obstacleSpeed = 2;
let playerSpeed = 10;

const startBtn = document.getElementById("start-btn");
const player = document.querySelector(".player");
const obstacle = document.querySelector(".obstacle");
const scoreDisplay = document.getElementById("score");

let playerX = 50; // Starting position of the player (50% = center)

function startGame() {
    // Reset game
    score = 0;
    scoreDisplay.textContent = score;
    player.style.left = '50%';
    obstacle.style.top = '-100px';
    
    startBtn.style.display = "none";
    
    // Move the obstacle downwards
    gameInterval = setInterval(function() {
        // Move the obstacle
        let obstacleTop = parseInt(getComputedStyle(obstacle).top);
        if (obstacleTop >= 500) {
            // Reset obstacle to top and randomize position
            obstacle.style.top = '-100px';
            obstacle.style.left = Math.random() * 70 + '%'; // Random X position
            score++; // Increase score as long as the player avoids the obstacle
            scoreDisplay.textContent = score;
        } else {
            obstacle.style.top = obstacleTop + obstacleSpeed + "px";
        }

        // Check for collision
        if (isCollision()) {
            endGame();
        }
    }, 20);
}

function movePlayer(event) {
    // Control player's car using arrow keys
    if (event.key === "ArrowLeft" && playerX > 0) {
        playerX -= playerSpeed;
    }
    if (event.key === "ArrowRight" && playerX < 95) {
        playerX += playerSpeed;
    }
    player.style.left = playerX + "%";
}

function isCollision() {
    let playerRect = player.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    return !(playerRect.right < obstacleRect.left || 
             playerRect.left > obstacleRect.right || 
             playerRect.bottom < obstacleRect.top || 
             playerRect.top > obstacleRect.bottom);
}

function endGame() {
    clearInterval(gameInterval);
    startBtn.style.display = "block"; // Show "Start Game" button again
    alert("Game Over! Your Score: " + score);
}

startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", movePlayer);
