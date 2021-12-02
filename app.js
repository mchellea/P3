const logo = document.querySelectorAll('#logo path');

for(let i = 0; i<logo.length; i++) {
    console.log('Letter ${i} is ${logo[i].getTotalLength()}');
}

var tl = new TimelineMax({onUpdate:updatePecentage});
const controller = new ScrollMagic.Controller();

tl.from("blockquote", .5, {x:200, opacity: 0});

const scene = new ScrollMagic.Scene({
    triggerElement: ".flower",
    triggerHook: "onLeave",
    duration: "100%"

})

.setPin(".flower")
.setTween(tl)
    .addTo(controller);

function updatePecentage() {
    tl.progress();
    console.log(tl.progress());
}