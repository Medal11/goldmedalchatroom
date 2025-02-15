let username = '';
let loggedIn = false;

// Handle login process
function login() {
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    if (inputUsername && inputPassword === 'medal') {
        username = inputUsername;
        loggedIn = true;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('chatroom').style.display = 'block';
        alert(`Welcome, ${username}!`);
    } else {
        alert('Invalid username or password!');
    }
}

// Handle logout
function logout() {
    loggedIn = false;
    document.getElementById('chatroom').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
    alert('Logged out successfully!');
}

// Send a message to the chat
function sendMessage() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${username}: ${messageText}`;
        document.getElementById('messages').appendChild(messageDiv);
        messageInput.value = '';
        messageInput.focus();
    }
}

// Start a selected game
function startGame(game) {
    if (game === 'tic-tac-toe') {
        alert('Tic-Tac-Toe game starting soon!');
        // Implement Tic-Tac-Toe game logic here
    } else if (game === 'rock-paper-scissors') {
        alert('Rock Paper Scissors game starting soon!');
        // Implement Rock-Paper-Scissors game logic here
    }
}
