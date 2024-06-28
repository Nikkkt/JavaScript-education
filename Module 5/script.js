document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Fetch input values
    let usernameInput = document.getElementById('username');
    let messageInput = document.getElementById('message');
    let username = usernameInput.value.trim();
    let message = messageInput.value.trim();

    // Validate inputs
    if (!username || !message) {
        alert('Please enter both username and message.');
        return;
    }

    // Get current date and time
    let currentDateTime = new Date();
    let formattedTime = currentDateTime.toLocaleTimeString('uk-UA', { hour12: false });
    let formattedDate = currentDateTime.toLocaleDateString('uk-UA');

    // Create new list item
    let li = document.createElement('li');
    li.innerHTML = `<strong>${username}:</strong> ${message} <br> <em>${formattedTime} - ${formattedDate}</em>`;

    // Append the new list item to message list
    let messageList = document.getElementById('messageList');
    messageList.appendChild(li);

    // Clear input fields
    usernameInput.value = '';
    messageInput.value = '';
});
