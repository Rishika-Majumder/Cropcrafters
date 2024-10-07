document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation for demo purposes
    if (username === 'admin' && password === '1234') {
        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});
