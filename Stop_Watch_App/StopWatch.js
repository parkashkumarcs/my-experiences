var hrs = 0;
var mint = 0;
var sec = 0;
var clearTime;

function start() {
    sec++;
    let check = false;

    if (sec == 60) {
        sec = 0;
        mint++;
        check = true;
    }
    if (mint == 60) {
        mint = 0;
        hrs++;
        check = true;
    }

    // Formatting time output
    let timeFormat = 
        (hrs > 0 ? (hrs < 10 ? "0" + hrs : hrs) + "hr : " : "00hr : ") +
        (mint > 0 ? (mint < 10 ? "0" + mint : mint) + "min : " : "00min : ") +
        (sec < 10 ? "0" + sec : sec) + "sec";

    document.getElementById('setTime').innerHTML = timeFormat;

    // UI Enhancements
    document.getElementById('card').style.backgroundColor = '#1b011d';
    document.getElementById('setTime').style.color = '#19eb24';
    document.getElementById('setTime').style.transition = '0.3s';
    document.getElementById('setTime').style.backgroundColor = '#27121b';
    
    document.getElementById('start').style.pointerEvents = "none";
    document.getElementById('start').style.backgroundColor = '#19eb24';
    document.getElementById('stop').style.backgroundColor = '';

    clearTime = setTimeout(start, 1000);
}

function stop() {
    clearTimeout(clearTime);
    document.getElementById('start').style.pointerEvents = "all";
    document.getElementById('start').style.backgroundColor = '';
    document.getElementById('stop').style.backgroundColor = '#ec0e0e';
    document.getElementById('setTime').style.color = '#ec0e0e';
    document.getElementById('setTime').style.backgroundColor = 'linear-gradient(135deg, #1e1e1e, #292929)';
}

function reset() {
    clearTimeout(clearTime);

    hrs = 0;
    mint = 0;
    sec = 0;

    document.getElementById('setTime').innerHTML = "00hr : 00min : 00sec";
    document.getElementById('setTime').style.color = '#00c3ff';
    document.getElementById('setTime').style.backgroundColor = 'background-color: #333';
    document.getElementById('card').style.backgroundColor = '';
    document.getElementById('start').style.pointerEvents = "all";
    document.getElementById('start').style.backgroundColor = '';
    document.getElementById('stop').style.backgroundColor = '';
}
