function now(txt) {
    console.log(new Date().toLocaleTimeString(), txt);
}

function wait(milisecond) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milisecond) {}
}

now("start to wait");
setTimeout(function () {
    now("end");
}, 5000);

now("finish")