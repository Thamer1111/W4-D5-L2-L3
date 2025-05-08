let goBtn = document.getElementById("goButton");
let stopBtn = document.getElementById("stopButton");
let slowBtn = document.getElementById("slowButton");
let goLight = document.getElementById("goLight");
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
goBtn.addEventListener("click", () => {
     goLight.style.backgroundColor = "green";
     stopLight.style.backgroundColor = "#111";
     slowLight.style.backgroundColor = "#111";
});
stopBtn.addEventListener("click", () => {
    goLight.style.backgroundColor = "#111";
    stopLight.style.backgroundColor = "red";
    slowLight.style.backgroundColor = "#111";
});
slowBtn.addEventListener("click", () => {
    goLight.style.backgroundColor = "#111";
    stopLight.style.backgroundColor = "#111";
    slowLight.style.backgroundColor = "yellow";
});
