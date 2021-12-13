const clock = document.querySelector(".dateDisplay");
const inputTextBox = document.querySelector(".scheduleText");
const input10TextBox = document.querySelector(".schedule10Text");
const input11TextBox = document.querySelector(".schedule11Text");
const input12TextBox = document.querySelector(".schedule12Text");
const input1TextBox = document.querySelector(".schedule1Text");
const input2TextBox = document.querySelector(".schedule2Text");
const input3TextBox = document.querySelector(".schedule3Text");
const input4TextBox = document.querySelector(".schedule4Text");
const input5TextBox = document.querySelector(".schedule5Text");
let inputTextBtn = document.querySelector(".scheduleBtn");
let input10TextBtn = document.querySelector(".hour-10-scheduleBtn");
let input11TextBtn = document.querySelector(".hour-11-scheduleBtn");
let input12TextBtn = document.querySelector(".hour-12-scheduleBtn");
let input1TextBtn = document.querySelector(".hour-1-scheduleBtn");
let input2TextBtn = document.querySelector(".hour-2-scheduleBtn");
let input3TextBtn = document.querySelector(".hour-3-scheduleBtn");
let input4TextBtn = document.querySelector(".hour-4-scheduleBtn");
let input5TextBtn = document.querySelector(".hour-5-scheduleBtn");

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
    var currentHour = moment().hh;
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
// Text box 9
inputTextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = inputTextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};
// logs data to local storage
// Text box 10
input10TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input10TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};
// logs data to local storage
// Text box 11
input11TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input11TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};

// logs data to local storage
// Text box 12
input12TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input12TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};

// logs data to local storage
// Text box 1
input1TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input1TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};

// logs data to local storage
// Text box 2
input2TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input2TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};

// logs data to local storage
// Text box 3
input3TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input3TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};

// logs data to local storage
// Text box 4
input4TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input4TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};

// logs data to local storage
// Text box 5
input5TextBtn.onclick = function() {
    let data = $(this).attr("data-hour");
    const value = input5TextBox.value;
    console.log(value);

    if(value) {
        localStorage.setItem(data, value);
    }
};


// Allows data to stay after refresh
$('#9').val(localStorage.getItem('hour-9'));
$('#10').val(localStorage.getItem('hour-10'));
$('#11').val(localStorage.getItem('hour-11'));
$('#12').val(localStorage.getItem('hour-12'));
$('#1').val(localStorage.getItem('hour-1'));
$('#2').val(localStorage.getItem('hour-2'));
$('#3').val(localStorage.getItem('hour-3'));
$('#4').val(localStorage.getItem('hour-4'));
$('#5').val(localStorage.getItem('hour-5'));
