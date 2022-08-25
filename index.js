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
let body = document.querySelector("body")

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
const quotes = ["You are Beautiful","You are art","You can do this",
"Don't overthink it, just do it","You got this","Be Productive","Be Brilliant",
"Breathe","We don't have to win every battle","I believe in you","Keep grinding",
"It won't be long, You'd get there","The past is gone, We'd always move forward, We're always moving on",
"Say less than necessary","If We're unwilling to fail, We're unwilling to succeed","It's okay to fail, We build it better the second time"]

function randomnum(){
 return Math.floor(Math.random() * quotes.length)
}
function quote(){
    footer.textContent = `"${quotes[randomnum()]}"`
  }
setInterval(quote, 3000)

function changeBackground(){
  const time = new Date()
  let ye = time.getFullYear()
  let mo = time.getMonth()
  let da = time.getDay()
  let ho = time.getHours()
  let mi = time.getMinutes()
  let se = time.getSeconds()
  
  // midnight to dawn
  if(ho >= 0 && ho < 4){
    body.style.backgroundImage = "linear-gradient(to bottom, #105b93 10%, #381749 )"
    console.log("Midnight")
    for(let i = 0; i < card.children.length; i++){
      card.children[i].style.backgroundColor = "#12437c"
    }
 } //dawn to morning
  else if(ho >= 4 && ho < 6){
    body.style.backgroundImage = "linear-gradient(to bottom, #1e6b96 10%, #f4a18b 90%)"
    console.log("Dawn")
    for(let i = 0; i < card.children.length; i++){
      card.children[i].style.backgroundColor = "#5a7b91"
    }
  }//morning to mid day
  else if(ho >= 6 && ho < 10){
    body.style.backgroundImage = "linear-gradient(to bottom, #104bb2 10%, #bfd4d8 90%)"
    console.log("Morning")
    for(let i = 0; i < card.children.length; i++){
      card.children[i].style.backgroundColor = "#5778bf"
    }
  }//early mid day to late mid day
  else if(ho >= 10 && ho < 14){
    body.style.backgroundImage = "linear-gradient(to bottom, #95c5de 10%, #ffee99 90%)"
    console.log("Mid day")
    for(let i = 0; i < card.children.length; i++){
      card.children[i].style.backgroundColor = "#bad2c5"
    }
  }// late mid day to evening
  else if(ho >= 14 && ho < 18){
    body.style.backgroundImage = "linear-gradient(to bottom, #ffee99 10%, #8e6993 90%)"
    console.log("Late mid day")
    for(let i = 0; i < card.children.length; i++){
      card.children[i].style.backgroundColor = "#d7be96"
    }
  }//evening to night
  else if(ho >= 18 && ho < 19){
    body.style.backgroundImage = "linear-gradient(to bottom, #3a3157 10%, #e99a4e 90%)"
    console.log("Evening")
    for(let i = 0; i < card.children.length; i++){
      card.children[i].style.backgroundColor = "#775352"
    }
  }//night to midnight
  else if(ho >= 19 && ho < 23 && mi < 59){
    body.style.backgroundImage = "linear-gradient(to bottom, #3c2e57 10%, #213746 90%)"
    console.log("Night")
    for(let i = 0; i < card.children.length; i++){
      card.children[i].style.backgroundColor = "#323151"
    }
  }
}
changeBackground()
setInterval(changeBackground, 36e5)