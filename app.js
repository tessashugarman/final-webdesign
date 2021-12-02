var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.body.querySelector("nav").style.top = "0";
    } else {
        document.body.querySelector("nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}