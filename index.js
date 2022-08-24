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

console.log(card)

function clicke(pa){
//   console.log(card)
// if(card.classList.contains('hidden')){
//   card.classList.remove('hidden')
// }else{
//   card.classList.add('hidden')
// }

  
  if(pa.statu === false){
    pa.statu = true
  card.children[0].classList.add('hidden')
}
else if(pa.statu === true){
  pa.statu = false
  }
  //check toggle succesful output result next 
  //console.log(pa.statu)
//   if(Year.statu === true){
//    year.classList.add('hidden')
//    }
//    else{
//     console.log("year")
//    //  year.classList.remove('hidden')
//   }
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

