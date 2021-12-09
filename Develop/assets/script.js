const clock = document.querySelector(".dateDisplay");
const inputTextBox = document.querySelector(".scheduleText");
const inputTextBtn = document.querySelector(".scheduleBtn");


function updateTime () {
    const now = moment();
    const readableDisplay = now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    clock.textContent = readableDisplay;
}
setInterval(updateTime, 1000);
updateTime();

// make a click work/display textContent
inputTextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = inputTextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
}





