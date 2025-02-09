const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const message = document.getElementById('message');

noButton.addEventListener('mouseover', (event) => {
    // Get the dimensions of the button and the window
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    message.style.display = 'block';  // Make the message visible
    message.innerHTML = 'Unlucky';  // Change the message content

    setTimeout(() => {
        message.style.display = 'none';
    }, 1000);

    // Increase the range of random offsets for more dramatic movement
    const randomOffsetX = Math.floor(Math.random() * 800) - 400; // Random number between -400 and 400
    const randomOffsetY = Math.floor(Math.random() * 800) - 400; // Random number between -400 and 400

    // Calculate the new position based on mouse position + random offset
    let newX = event.clientX + randomOffsetX;
    let newY = event.clientY + randomOffsetY;

    // Define padding to keep the button within a safe area from the edges
    const padding = 20; // The minimum space from the edge

    // Ensure the button stays within the window's width (with padding)
    newX = Math.max(padding, Math.min(newX, windowWidth - buttonWidth - padding));

    // Ensure the button stays within the window's height (with padding)
    newY = Math.max(padding, Math.min(newY, windowHeight - buttonHeight - padding));

    // Avoid the button getting close to the edges and allow it to keep moving
    const edgeThreshold = 50; // The threshold distance from edges where the button will move

    if (
        newX <= edgeThreshold || 
        newX >= windowWidth - buttonWidth - edgeThreshold ||
        newY <= edgeThreshold ||
        newY >= windowHeight - buttonHeight - edgeThreshold
    ) {
        // If the button is too close to an edge, force it to move randomly away from that edge
        newX = Math.max(padding, Math.min(newX + Math.floor(Math.random() * 400) - 200, windowWidth - buttonWidth - padding));
        newY = Math.max(padding, Math.min(newY + Math.floor(Math.random() * 400) - 200, windowHeight - buttonHeight - padding));
    }

    // Move the "No" button
    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

noButton.addEventListener('click', () => {

    message.style.display = 'block';  // Make the message visible
    message.innerHTML = 'Ala takle';  // Change the message content


});

yesButton.addEventListener('click', () => {
    // Display the message when Yes is clicked
    message.style.display = 'block';  // Make the message visible
    message.innerHTML = 'Love you!❤️';  // Change the message content

    setTimeout(() => {
       // message.style.display = 'none';  // Hide the message
       message.innerHTML = 'Balik cepat pls';  // Change the message content
    }, 1500);  // 3000 milliseconds = 3 seconds

    setTimeout(() => {
        message.innerHTML = 'I miss you';
    }, 3000);

    setTimeout(() => {
        message.style.display = 'none';
    }, 5000);
});