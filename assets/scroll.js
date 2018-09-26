// var headroom = require('./headroom/headroom.min.js');
// import './headroom/headroom.min.js';
// grab an element
var myElement = document.getElementById("subNavRow");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement);
// initialise
headroom.init(); 

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("subNavRow").style.top = "0";
//     } else {
//         document.getElementById("subNavRow").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }