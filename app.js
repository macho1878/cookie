const cookieCounter = document.getElementById("cookieCounter");
const stop = document.getElementById("stopButton");
const start = document.getElementById("startButton");

let cookie = 0;
/*setInterval(function () {
  cookie += 1;
  cookieCounter.innerText = cookie;
}, 1000);*/
start.addEventListener("click", function () {
  setInterval(function () {
    cookie += 1;
    cookieCounter.innerText = cookie;
  }, 1000);
});

stop.addEventListener("click", function () {
  setTimeout(function () {
    cookie = 0;
    cookieCounter.innerText = cookie;
    alert("Just keep clicking!");
  }, 1000);
});
