const clock = document.querySelector(".dateDisplay");
const inputTextBox = document.querySelector(".scheduleText");
let inputTextBtn = document.querySelector(".scheduleBtn");

// time display
function updateTime () {
    const now = moment();
    const readableDisplay = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = readableDisplay;
}
setInterval(updateTime, 1000);
updateTime();

// updates Timeblock to the assigned color based on the hour
function hourUpdater() {
    var currentHour = moment().hours();
    var blockHour = document.getElementById("#9");

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





