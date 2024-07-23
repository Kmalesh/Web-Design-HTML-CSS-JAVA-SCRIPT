const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

const tileSize = 20;
const rows = canvas.height / tileSize;
const cols = canvas.width / tileSize;

let snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
let food = { x: 0, y: 0 };
let dx = 0, dy = 0;
let score = 0;

function gameLoop() {
    clearCanvas();
    moveSnake();
    drawSnake();
    drawFood();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

function clearCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreDisplay.textContent = score;
        generateFood();
    } else {
        snake.pop();
    }
}

function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
}

function generateFood() {
    food.x = Math.floor(Math.random() * cols);
    food.y = Math.floor(Math.random() * rows);
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows || snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
        alert(`Game Over! Your score is ${score}`);
        resetGame();
    }
}

function resetGame() {
    snake = [{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }];
    food = { x: 0, y: 0 };
    dx = 0;
    dy = 0;
    score = 0;
    scoreDisplay.textContent = score;
    generateFood();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp' && dy !== 1) {
        dx = 0;
        dy = -1;
    } else if (e.key === 'ArrowDown' && dy !== -1) {
        dx = 0;
        dy = 1;
    } else if (e.key === 'ArrowLeft' && dx !== 1) {
        dx = -1;
        dy = 0;
    } else if (e.key === 'ArrowRight' && dx !== -1) {
        dx = 1;
        dy = 0;
    }
});

generateFood();
gameLoop();





