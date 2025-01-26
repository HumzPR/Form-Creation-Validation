// Define the asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Data container

    try {
        // Start the fetch process
        const response = await fetch(apiUrl);

        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user names
        const userList = document.createElement('ul');

        // Loop through the users and add each user's name as a <li>
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the list item to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // In case of an error, show a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
