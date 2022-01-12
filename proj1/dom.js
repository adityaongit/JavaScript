// setInterval
// setTimeout

var counter = document.getElementsByClassName("counter");
var followers = document.getElementsByClassName("followers");

let count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Your Twitter followers!";
}, 4000);
