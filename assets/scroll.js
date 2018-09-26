var headroom = require('./headroom/headroom.min.js');

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("subNavRow").style.top = "0";
    } else {
        document.getElementById("subNavRow").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}