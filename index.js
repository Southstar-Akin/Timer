// Initial values of time boxes and doms
const days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"]
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
let year = document.querySelector(".year")
let month = document.querySelector(".month")
let day = document.querySelector(".day")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let footer = document.querySelector("footer")
let mag = document.querySelector("img.img")
let opt = document.querySelector("#opt")
let card = document.querySelector(".time")
console.log()
//settings functionality area for box selection
let All =  {
  dom: document.querySelector("button#all"),
  statu: false
}
let Year = {
  dom: document.querySelector("button#Year"),
  statu: false
}
let Month = {
  dom: document.querySelector("button#Month"),
  statu: false
}
let Day =  {
  dom: document.querySelector("button#Day"),
  statu: false
}
let Hour =  {
  dom: document.querySelector("button#hour"),
  statu: false
}
let Minute =  {
  dom: document.querySelector("button#minute"),
  statu: false
}
let Second = {
  dom: document.querySelector("button#second"),
  statu: false
}



function clic(pa){
  if(pa.statu === false){
    pa.statu = true
    pa.dom.style.borderLeft = "white"
    pa.dom.style.borderLeft = "2px"
    pa.dom.style.borderLeft = "solid"
    if(pa = "All") {
      for(let i = 0; i < card.children.length; i++){
      card.children[i].style.display = "none"
      }
}
  }
else if(pa.statu === true){
  pa.statu = false
  pa.dom.style.borderLeft = "none"
  if(pa = "All") {
    for(let i = 0; i < card.children.length; i++){
    card.children[i].style.display = "grid"
    }
  }
}
}

function cli(pa){
  if(pa.statu === false){
    pa.statu = true
    pa.dom.style.borderLeft = "white"
    pa.dom.style.borderLeft = "2px"
    pa.dom.style.borderLeft = "solid"
    if(pa = "Year")
    {
    card.children[0].style.display = "none"
    }
}
else if(pa.statu === true){
  pa.statu = false
  pa.dom.style.borderLeft = "none"
  if(pa = "Year"){
card.children[0].style.display = "grid"
}
  }
}

function cl(pa){
  if(pa.statu === false){
    pa.statu = true
    pa.dom.style.borderLeft = "white"
    pa.dom.style.borderLeft = "2px"
    pa.dom.style.borderLeft = "solid"
    if(pa = "Month")
    {
    card.children[1].style.display = "none"
    }
}
else if(pa.statu === true){
  pa.statu = false
  pa.dom.style.borderLeft = "none"
  if(pa = "Month"){
card.children[1].style.display = "grid"
}
  }
}

function c(pa){
  if(pa.statu === false){
    pa.statu = true
    pa.dom.style.borderLeft = "white"
    pa.dom.style.borderLeft = "2px"
    pa.dom.style.borderLeft = "solid"
    if(pa = "Day")
    {
    card.children[2].style.display = "none"
    }
}
else if(pa.statu === true){
  pa.statu = false
  pa.dom.style.borderLeft = "none"
  if(pa = "Day"){
card.children[2].style.display = "grid"
}
  }
}

function lic(pa){
  if(pa.statu === false){
    pa.statu = true
    pa.dom.style.borderLeft = "white"
    pa.dom.style.borderLeft = "2px"
    pa.dom.style.borderLeft = "solid"
    if(pa = "Hour")
    {
    card.children[3].style.display = "none"
    }
}
else if(pa.statu === true){
  pa.statu = false
  pa.dom.style.borderLeft = "none"
  if(pa = "Hour"){
card.children[3].style.display = "grid"
}
  }
}

function cic(pa){
  if(pa.statu === false){
    pa.statu = true
    pa.dom.style.borderLeft = "white"
    pa.dom.style.borderLeft = "2px"
    pa.dom.style.borderLeft = "solid"
    if(pa = "Minute")
    {
    card.children[4].style.display = "none"
    }
}
else if(pa.statu === true){
  pa.statu = false
  pa.dom.style.borderLeft = "none"
  if(pa = "Minute"){
card.children[4].style.display = "grid"
}
  }
}

function ick(pa){
  if(pa.statu === false){
    pa.statu = true
    pa.dom.style.borderLeft = "white"
    pa.dom.style.borderLeft = "2px"
    pa.dom.style.borderLeft = "solid"
    if(pa = "Second")
    {
    card.children[5].style.display = "none"
    }
}
else if(pa.statu === true){
  pa.statu = false
  pa.dom.style.borderLeft = "none"
  if(pa = "Second"){
card.children[5].style.display = "grid"
}
  }
}



//toogle for display of options
 function disp(){
      if(opt.classList.contains('hidden')){
       opt.classList.remove('hidden')
      }
       else{
      opt.classList.add('hidden')
       }
  }


function display() {
  const time = new Date()
  let ye = time.getFullYear()
  let mo = time.getMonth()
  let da = time.getDay()
  let ho = time.getHours()
  let mi = time.getMinutes()
  let se = time.getSeconds()
  let hoc = ho
  if (ho > 12){
    hoc = ho - 12
  }
  year.textContent = `${ye}`
  month.textContent = `${months[mo]}`
  day.textContent = `${days[da]}`
  hour.textContent = `${hoc}`
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

