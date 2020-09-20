var day_arg = 0;
var hour_arg= 0;
var minute_arg = 0;
var second_arg = 0;
var start = 0;

function day(arg) {
    day_arg += arg;
    check();
    update();
}

function hour(arg) {
    hour_arg += arg;
    check();
    update();
}

function minute(arg) {
    minute_arg += arg;
    check();
    update();
}

function second(arg) {
    second_arg += arg;
    check();
    update();
}

function update() {
    document.querySelector("#day").innerHTML = day_arg;
    document.querySelector("#hour").innerHTML = hour_arg;
    document.querySelector("#minute").innerHTML = minute_arg;
    document.querySelector("#second").innerHTML = second_arg;
}

function check() {
    if (day_arg < 0) {
        day_arg = 365;
    }

    if (day_arg > 365) {
        day_arg = 0;
    }

    if (hour_arg < 0) {
        hour_arg = 23;
    }

    if (hour_arg > 23) {
        day_arg++;
        hour_arg = 0;
    }

    if (minute_arg < 0) {
        minute_arg = 59;
    }

    if (minute_arg > 59) {
        hour_arg++;
        minute_arg = 0;
    }

    if (second_arg < 0) {
        second_arg = 59;
    }

    if (second_arg > 59) {
        minute_arg++;
        second_arg = 0;
    }
}

function validation() {
    if (second_arg < 0) {
        second_arg = 59;
        minute_arg--;
    }

    if (minute_arg < 0) {
        minute_arg = 59;
        hour_arg--;
    }

    if (hour_arg < 0) {
        hour_arg = 23;
        day_arg--;
    }
}

function countdown() { 
    if ((day_arg + hour_arg + minute_arg + second_arg) == 0) {
        alert("Finished!");
        clearInterval(timer);
        document.querySelector("#start").innerHTML = "Start";
        start = 0;
    } else {
        second_arg--;
        validation();
        update();
    }


}

function start_counter() {
    if (start == 0) {
        timer = setInterval(countdown, 1000);
        document.querySelector("#start").innerHTML = "Pause";
        start = 1;
    } else {
        clearInterval(timer);
        document.querySelector("#start").innerHTML = "Start";
        start = 0;
    }
}

function reset_counter() {
    day_arg = 0;
    hour_arg = 0;
    minute_arg = 0;
    second_arg = 0;
    update();
    clearInterval(timer);
    document.querySelector("#start").innerHTML = "Start";
    start = 0;
}