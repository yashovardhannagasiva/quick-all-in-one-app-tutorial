let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let countdown;
let totalSeconds=1500;
let totalMilliseconds=totalSeconds*1000;

start.addEventListener("click", function () {
const now = Date.now();
const then = now + totalMilliseconds;
setInterval(()=>{

},1000)
});

pause.addEventListener("click", () => clearInterval(countdown));
reset.addEventListener("click", () => {
  clearInterval(countdown);
  minutes.textContent = "25";
  seconds.textContent = "00";
});

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent =
    remainderSeconds < 10 ? "0" + remainderSeconds : remainderSeconds;
}


// function timer(seconds) {
//     clearInterval(countdown);

//   const now = Date.now();
//   const addMilliseconds = seconds * 1000;
//   const then = now + addMilliseconds; 

//   countdown = setInterval(() => {
//     const milliSecondsLeft = then - Date.now();

//     const secondsLeft = Math.round(milliSecondsLeft / 1000);

//     if (secondsLeft < 0) {
//       clearInterval(countdown);
//       alert("Pomodoro time is up!");
//       return;
//     }
//     displayTimeLeft(secondsLeft);
//   }, 1000);
// }
