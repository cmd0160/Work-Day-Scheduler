const clock = document.querySelector(".dateDisplay");

function updateTime () {
// Establish current date and time
    const now = moment();
// Format the display using moment.js
    const readableDisplay = now.format("dddd, MMMM Do YYYY, h:mm:ss a");

// Display text for the date/time
    clock.textContent = readableDisplay;
}
// setInterval function calls updateTime every 1 second
setInterval(updateTime, 1000);
updateTime();