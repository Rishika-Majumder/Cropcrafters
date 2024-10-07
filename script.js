// Get elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const closeMenu = document.getElementById('close-menu');

// Function to open the menu
menuToggle.addEventListener('click', () => {
    if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
    else{
        navLinks.classList.add('active');
    } // Add active class to show menu
});


const accountIcon = document.querySelector('.account-icon');
const accountMenu = document.getElementById('account-menu');

// Toggle the account menu on account icon click
accountIcon.addEventListener('click', () => {
    if (accountMenu.classList.contains('active')) {
        accountMenu.classList.remove('active'); // Close the menu
    } else {
        accountMenu.classList.add('active'); // Open the menu
    }
});

const chatButton = document.getElementById('chat-button');
const chatbox = document.getElementById('chatbox');
const closeChat = document.getElementById('close-chat');

// Show the chatbox when the chat button is clicked
chatButton.addEventListener('click', () => {
    chatbox.style.display = 'flex'; // Show the chatbox
});

// Close the chatbox when the close button is clicked
closeChat.addEventListener('click', () => {
    chatbox.style.display = 'none'; // Hide the chatbox
});

const cameraButton = document.getElementById('camera-button');
const videoElement = document.getElementById('camera-stream');
let cameraStream = null;  // To hold the media stream

// Toggle camera on and off
cameraButton.addEventListener('click', async () => {
    if (!cameraStream) {
        // If the camera is off, start the camera
        try {
            cameraStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { ideal: "environment" } // Attempt to use the back camera
                }
            });
            videoElement.srcObject = cameraStream;
            document.querySelector('.video-container').style.display = 'block'; // Show video
        } catch (err) {
            alert('Unable to access the camera: ' + err.message);
        }
    } else {
        // If the camera is on, stop the camera
        let tracks = cameraStream.getTracks(); // Get all tracks (video and audio)
        tracks.forEach(track => track.stop()); // Stop each track
        cameraStream = null;  // Reset the stream variable
        videoElement.srcObject = null;  // Clear the video element
        document.querySelector('.video-container').style.display = 'none'; // Hide video
    }
});

const searchButton = document.querySelector('.search-icon'); // Search button
const searchInput = document.querySelector('.search-input'); // Search input

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('active'); // Toggle active class for search input
    // Optionally, focus the search input when it becomes visible
    if (searchInput.classList.contains('active')) {
        searchInput.focus(); // Focus on the input
    }
});
