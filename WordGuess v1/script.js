
var typed = new Typed('.beachText', {
    strings: ["BEACH"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});

var typed = new Typed('.dogText', {
    strings: ["DOG"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});

var typed = new Typed('.lampText', {
    strings: ["LAMP"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});

var typed = new Typed('.fruitsText', {
    strings: ["FRUITS"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});

var typed = new Typed('.footballText', {
    strings: ["FOOTBALL"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});

var typed = new Typed('.bridgeText', {
    strings: ["BRIDGE"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});

var typed = new Typed('.aeroplaneText', {
    strings: ["AEROPLANE"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});

var typed = new Typed('.parrotText', {
    strings: ["PARROT"],
    typeSpeed: 500,
    backSpeed: 0,
    loop: true,
    cursorChar: "",
});


var box = document.querySelectorAll('.box');

box.forEach(item => {
    let rotateDegree = Math.floor(Math.random() * 13);

    item.style.transform = `rotate(${rotateDegree}deg)`
})

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    document.getElementById("playBtn").play();
    setTimeout(() => {
        window.location.href = './word.html'
    }, 800);
})