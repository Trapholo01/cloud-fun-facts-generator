// API Gateway endpoint
const API_ENDPOINT = 'https://r480h5wnab.execute-api.us-east-1.amazonaws.com/funfact';

// Get DOM elements
const generateBtn = document.getElementById('generate-btn');
const factDisplay = document.getElementById('fact-display');
const loadingSpinner = document.getElementById('loading');

// Function to fetch a random fact from the API
async function getRandomFact() {
    try {
        // Show loading state
        generateBtn.disabled = true;
        generateBtn.textContent = 'Loading...';
        factDisplay.style.opacity = '0.5';
        
        // Make API call
        const response = await fetch(API_ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();

        // Display the fact with animation
        setTimeout(() => {
            factDisplay.textContent = data.fact;
            factDisplay.style.opacity = '1';
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate Fun Fact';
        }, 300);

    } catch (error) {
        console.error('Error fetching fact:', error);
        
        // Display error message to user
        factDisplay.textContent = 'Oops! Unable to fetch a fact right now. Please try again later.';
        factDisplay.style.opacity = '1';
        generateBtn.disabled = false;
        generateBtn.textContent = 'Generate Fun Fact';
    }
}

// Add click event listener to button
generateBtn.addEventListener('click', getRandomFact);

// Optional: Load a fact on page load
window.addEventListener('DOMContentLoaded', () => {
    factDisplay.textContent = 'Click the button below to get a fun cloud fact!';
});

