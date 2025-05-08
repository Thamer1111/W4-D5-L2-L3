let setUrl = [
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg",
    "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg"
]

let img = document.getElementById("show-img");

let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");
let btn4 = document.getElementById("four");
let btn5 = document.getElementById("five");
let btn6 = document.getElementById("six");
let btn7 = document.getElementById("saven");
let btn8 = document.getElementById("eight");
let btn9 = document.getElementById("nine");

btn1.addEventListener("click", ()=>{
    img.src = setUrl[0]
});

btn2.addEventListener("click", ()=>{
    img.src = setUrl[1]
});
btn3.addEventListener("click", ()=>{
    img.src = setUrl[2]
});
btn4.addEventListener("click", ()=>{
    img.src = setUrl[3]
});
btn5.addEventListener("click", ()=>{
    img.src = setUrl[4]
});
btn6.addEventListener("click", ()=>{
    img.src = setUrl[5]
});
btn7.addEventListener("click", ()=>{
    img.src = setUrl[6]
});
btn8.addEventListener("click", ()=>{
    img.src = setUrl[7]
});
btn9.addEventListener("click", ()=>{
    img.src = setUrl[8]
});

