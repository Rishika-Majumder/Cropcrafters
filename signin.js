document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation for password matching
    if (password === confirmPassword) {
        window.location.href = "login.html";
    }
    else{
        document.getElementById('error-message').innerText = 'Passwords donot match'
    }
    
});
