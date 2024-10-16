// Get section and progress spans
let ourSkills = document.getElementById("our-skills")
let progressSpans = document.querySelectorAll(".our-skills span")
// making spans reached to width on dataset with animate on scrolling
window.onscroll = () => { 
  if (window.scrollY >= ourSkills.offsetTop - 150) {
    console.log("omar");

    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width
    })
  }
 }


// Create Countdown Timer to the end of the year
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

console.log(Math.floor(countDownDate / 1000 / 60 / 60 / 24 / 365));
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime()

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(dateDiff % (1000 * 60) / 1000)

  document.querySelector(".days").innerHTML = days <= 10 ? `0${days}` : days  
  document.querySelector(".hours").innerHTML = hours <= 10 ? `0${hours}` : hours
  document.querySelector(".minutes").innerHTML = minutes <= 10 ? `0${minutes}` : minutes
  document.querySelector(".seconds").innerHTML = seconds <= 10 ? `0${seconds}` : seconds
}, 1000)
