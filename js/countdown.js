// COUNTDOWN

// Set the date we're counting down to
const countDownDate = new Date("2022-09-03T15:00:00").getTime();

const minZero = (number) => (number > 0 ? number : 0);

const addZeroPrefix = (number, isDays = false) => {
  return isDays ? number : `${number}`.padStart(2, 0);
};

const setTimer = () => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = minZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hours = minZero(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = minZero(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  let seconds = minZero(Math.floor((distance % (1000 * 60)) / 1000));

  // If the count down is over
  if (distance < 0) {
    clearInterval(x);
  }

  // Output the result in an element with id="demo"
  document.getElementById("timer-days").innerHTML = addZeroPrefix(days, true);
  document.getElementById("timer-hours").innerHTML = addZeroPrefix(hours);
  document.getElementById("timer-min").innerHTML = addZeroPrefix(minutes);
  document.getElementById("timer-sec").innerHTML = addZeroPrefix(seconds);
};

// Update the count down every 1 second
window.addEventListener("load", setTimer);
const x = setInterval(setTimer, 1000);
