var timeout = 100;

function timedCount(){
    postMessage(timeout);
    setTimeout("timedCount()", timeout)
}

timedCount();