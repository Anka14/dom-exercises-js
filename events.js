const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  

//create divs with color
let section = document.querySelector('.displayedsquare-wrapper')

if (e.target.classList.contains("green")) {
  let green = document.createElement("div");
  section.append(green);
  green.classList.add("displayedsquare", "green");
}  
if (e.target.classList.contains("violet")) {
  let violet = document.createElement("div");
  section.append(violet);
  violet.classList.add("displayedsquare", "violet");
} 
if (e.target.classList.contains("orange")) {
  let orange = document.createElement("div");
  section.append(orange);
  orange.classList.add("displayedsquare", "orange");
}
//creating <li></li>
let ul = document.querySelector ('ul')
console.log (ul)

if (e.target.classList.contains("green")) {
  let li_text_green = document.createElement("li");
  li_text_green.textContent = 'created a new green square'
  ul.append(li_text_green);
  
}  
if (e.target.classList.contains("violet")) {
  let li_text_violet = document.createElement("li");
  li_text_violet.textContent = 'created a new violet square'
  ul.append(li_text_violet);
  
}  
if (e.target.classList.contains("orange")) {
  let li_text_orange = document.createElement("li");
  li_text_orange.textContent = 'created a new orange square'
  ul.append(li_text_orange);
  
}  

// creating backgrouncolor
document.querySelector ('body').addEventListener ('keydown', function(event){
  if (event.keyCode === 32) {
    document.body.style.background = 'violet'
  }
  // REMOVING UL
  let li = document.querySelector ('ul')
  
    if (event.keyCode === 76){
    ul.remove()
 }
 const rem_squares = document.querySelector ('.displayedsquare-wrapper')

if (event.keyCode === 83) {
  rem_squares.remove() 
}
 


} )

const clickedSquare = document.querySelectorAll('.displayedsquare')
for (el of clickedSquare) {
  el.addEventListener ('click', handler);
  function handler (){
    
    if (el.classList.contains('green')){
      alert ('green')
    }
    else if (el.classList.contains ('violet')){
      alert ('violet')
    }
    else {
      alert ('orange')
    }
  }
}
}

 




const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);


}

