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
let settings = document.querySelector("#setting")
//let cd = document.querySelector(".Cards")
// let theme = document.querySelector(".theme")
// let qu = document.querySelector(".quotes")

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
let d = {
  dom: document.querySelector("#cd"),
  statu: false
}
let the = {
  dom: document.querySelector("#theme"),
  statu: false
}
 let qu = {
  dom: document.querySelector("#quotes"),
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
       d.dom.style.display = "none"
      the.dom.style.display = "none"
       qu.dom.style.display = "none"
       document.querySelector("main").style.display = "none"
       document.querySelector("footer").style.display = "none"
      }
       else{
      opt.classList.add('hidden')
      document.querySelector("main").style.display = "grid"
      document.querySelector("footer").style.display = "grid"
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


const loveQuotes = ["I didn't love her at first sight","When I first met her","She was....","I found her boyish",
"Was wearing a shirt","Looked liked her dad owned it","Later when we were acquainted","I asked her about it","And I was right",
"It belonged to her dad","We became friends","Music was our thing","Not a lot mattered to us in our early teens years","Music was the thread that held us together",
"And then we fell in love","It felt ✨✨✨","I...","I was in love...","Felt like the first time ever",
"I never thought it'd be her","We thought we'd last forever","We said we will","We were young","Life happened",
"She went to uni","Distance was unbearable","And the insecurities set it","We tried","We eventually grew apart",
"I thought I had moved on","I thought...","It's been a year","But I feel better","I saw her recently","And I saw all that I needed to see",
"She's changed","So have I, I guess","Whatever we shared","It's long dead","I guess it's time to stop dragging the body","I guess it's time to bury it","I guess it's time",
"To let go","Entry 'Southstar'"]


//code for the quotes output values
function first(){
function randomnum(){
 return Math.floor(Math.random() * quotes.length)
}
function moquote(){
  return footer.textContent = `${quotes[randomnum()]}`
}
}

function lem(){
let i = 0;
function quote(){
    footer.textContent = `"${loveQuotes[i]}"`
    i++
    stopStory()
}
let inter = setInterval(quote, 3000)
function stopStory(){
  if(i == loveQuotes.length){
    clearInterval(inter)
  } 
}
}


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
// more nav bar functionality

// Variables o, u and y are used to as values in the if else statements to return values as true to enable functions  
let o = 0;
function cr(){
  o++
  if(o % 2 != 0){
  d.dom.style.display = "grid"
  settings.children[0].style.borderLeft = "white"
  settings.children[0].style.borderLeft = "2px"
  settings.children[0].style.borderLeft = "solid"
}else{
  d.dom.style.display = "none"
  settings.children[0].style.borderLeft = "none"
}
}

let u = 0
function em(){
  u++
  if(u % 2 != 0){
  the.dom.style.display = "grid"
  settings.children[1].style.borderLeft = "white"
  settings.children[1].style.borderLeft = "2px"
  settings.children[1].style.borderLeft = "solid"
}else{
  the.dom.style.display = "none"
  settings.children[1].style.borderLeft = "none"
}
}

let y = 0
function ot(){
  u++
  if(u % 2 != 0){
  qu.dom.style.display = "grid"
  settings.children[2].style.borderLeft = "white"
  settings.children[2].style.borderLeft = "2px"
  settings.children[2].style.borderLeft = "solid"
}else{
  qu.dom.style.display = "none"
  settings.children[2].style.borderLeft = "none"
}
}

//theme change functions
let M = 0
function m(){
M++
    if( M % 2 != 0){
      the.dom.children[0].style.borderLeft = "white"
      the.dom.children[0].style.borderLeft = "2px"
      the.dom.children[0].style.borderLeft = "solid"
      body.style.backgroundImage = "linear-gradient(to bottom, #105b93 10%, #381749)"
      for(let i = 0; i < card.children.length; i++){
        card.children[i].style.backgroundColor = "#12437c"
      }  
    }else{
      the.dom.children[0].style.borderLeft = "none"
      changeBackground()
    }
}
let l = 0
function D(){
  l++
    if( l % 2 != 0){
      the.dom.children[1].style.borderLeft = "white"
      the.dom.children[1].style.borderLeft = "2px"
      the.dom.children[1].style.borderLeft = "solid"
      body.style.backgroundImage = "linear-gradient(to bottom, #1e6b96 10%, #f4a18b 90%)"
      for(let i = 0; i < card.children.length; i++){
        card.children[i].style.backgroundColor = "#5a7b91"
      }  
    }else{
      the.dom.children[1].style.borderLeft = "none"
      changeBackground()
    }
}
let r = 0
function b(){
  r++
    if( r % 2 != 0){
      the.dom.children[2].style.borderLeft = "white"
      the.dom.children[2].style.borderLeft = "2px"
      the.dom.children[2].style.borderLeft = "solid"
      body.style.backgroundImage = "linear-gradient(to bottom, #104bb2 10%, #bfd4d8 90%)"
      for(let i = 0; i < card.children.length; i++){
        card.children[i].style.backgroundColor = "#5778bf"
      }
  
    }else{
      the.dom.children[2].style.borderLeft = "none"
      changeBackground()
    }
  }
let Dt = 0
function Mid(){
  Dt++
    if( Dt % 2 != 0){
      the.dom.children[3].style.borderLeft = "white"
      the.dom.children[3].style.borderLeft = "2px"
      the.dom.children[3].style.borderLeft = "solid"
      body.style.backgroundImage = "linear-gradient(to bottom, #95c5de 10%, #ffee99 90%)"
      for(let i = 0; i < card.children.length; i++){
        card.children[i].style.backgroundColor = "#bad2c5"
      }  
    }else{
      the.dom.children[3].style.borderLeft = "none"
      changeBackground()
    }
}
let j = 0
function lat(){
  j++
    if( j % 2 != 0){
      the.dom.children[4].style.borderLeft = "white"
      the.dom.children[4].style.borderLeft = "2px"
      the.dom.children[4].style.borderLeft = "solid"
      body.style.backgroundImage = "linear-gradient(to bottom, #ffee99 10%, #8e6993 90%)"
      for(let i = 0; i < card.children.length; i++){
        card.children[i].style.backgroundColor = "#d7be96"
      }  
    }else{
      the.dom.children[4].style.borderLeft = "none"
      changeBackground()
    }
}
let n = 0
function eve(){
  n++
    if( n % 2 != 0){
      the.dom.children[5].style.borderLeft = "white"
      the.dom.children[5].style.borderLeft = "2px"
      the.dom.children[5].style.borderLeft = "solid"
      body.style.backgroundImage = "linear-gradient(to bottom, #3a3157 10%, #e99a4e 90%)"
      for(let i = 0; i < card.children.length; i++){
        card.children[i].style.backgroundColor = "#775352"
      }  
    }else{
      the.dom.children[5].style.borderLeft = "none"
      changeBackground()
    }
}
let aD = 0
function NI(){
  aD++
    if( aD % 2 != 0){
      the.dom.children[6].style.borderLeft = "white"
      the.dom.children[6].style.borderLeft = "2px"
      the.dom.children[6].style.borderLeft = "solid"
      body.style.backgroundImage = "linear-gradient(to bottom, #3c2e57 10%, #213746 90%)"
      for(let i = 0; i < card.children.length; i++){
        card.children[i].style.backgroundColor = "#323151"
      }  
    }else{
      the.dom.children[6].style.borderLeft = "none"
      changeBackground()
    }
}

//funtionality for quotes
let ti = 0
function titi(){
ti++
if( ti % 2 != 0){
  qu.dom.children[0].style.borderLeft = "white"
  qu.dom.children[0].style.borderLeft = "2px"
  qu.dom.children[0].style.borderLeft = "solid"
  first()
//  let inter = setInterval(first, 3000)
}else{
  qu.dom.children[0].style.borderLeft = "none"
  footer.textContent = ``
}
}
let mi = 0
function mimi(){
  mi++
  if( mi % 2 != 0){
    qu.dom.children[1].style.borderLeft = "white"
    qu.dom.children[1].style.borderLeft = "2px"
    qu.dom.children[1].style.borderLeft = "solid"
    lem()
   // let inter = setInterval(lem, 3000)
  }else{
    qu.dom.children[1].style.borderLeft = "none"
    stopStory()
  }
  }