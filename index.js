const days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"]
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
let year = document.querySelector(".year")
let month = document.querySelector(".month")
let day = document.querySelector(".day")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let footer = document.querySelector("footer")

function display() {
  const time = new Date()
  let ye = time.getFullYear()
  let mo = time.getMonth()
  let da = time.getDay()
  let ho = time.getHours()
  let mi = time.getMinutes()
  let se = time.getSeconds()
  year.textContent = `${ye}`
  month.textContent = `${months[mo]}`
  day.textContent = `${days[da]}`
  hour.textContent = `${ho}`
  minute.textContent = `${mi}`
  second.textContent = `${se}`
}
setInterval(display, 1000)
const quotes = ["You are Beautiful","You are art","You can do this","Don't overthink it, just do it","You got this","Be Productive","Be Brilliant","Breathe","We don't have to win every battle","I believe in you","Keep grinding"]

function randomnum(){
 return Math.floor(Math.random() * 11)
}
function quote(){
    footer.textContent = `${quotes[randomnum()]}`
  }
setInterval(quote, 3000)