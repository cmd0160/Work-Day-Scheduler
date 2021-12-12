const clock = document.querySelector(".dateDisplay");
const inputTextBox = document.querySelector(".scheduleText");
let inputTextBtn = document.querySelector(".scheduleBtn");

// time display
function updateTime () {
    const now = moment();
    const readableDisplay = now.format("dddd, MMMM Do YYYY, hh:mm:ss A");
    clock.textContent = readableDisplay;
}
setInterval(updateTime, 1000);
updateTime();

// updates Timeblock to the assigned color based on the hour
function hourUpdater() {
    var currentHour = moment().h;
    var timeblockHour = document.getElementById("#9");

    if (timeblockHour < currentHour) {
    $(this).addClass("#past");
    } else if (timeblockHour === currentHour) {
    $(this).addClass("#present");   
    } else if (timeblockHour > currentHour) {
    $(this).addClass("#future");   
    };
};
hourUpdater();

// logs data to local storage
inputTextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = inputTextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
}





