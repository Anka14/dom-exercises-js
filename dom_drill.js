//Use childNodes to list all the children from the <ul>
const ul = document.querySelector ('ul');
const ulChildNode = ul.childNodes
console.log (ulChildNode)

// Write a for loop to iterate over every child. In this loop:
//Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)

for (const node of ulChildNode){
  console.log ('nodetype' + node.nodeType)
}

//Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list

const li = document.querySelectorAll('li')
for ( item of li){
 ul.prepend(li [5])
 li[5].classList ='important'

}

//Add an eventListener on every item of the list. If the item is clicked 
//an alert() pops up to display the name of clicked 

// Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display 
//The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.

const  list = document.querySelectorAll ('li')
for (elem of list){
 /* console.log (elem)*/

elem.addEventListener ('click', (event) => {
  if (event.target.textContent !=='Fast and Furious'){
    alert (event.target.textContent)
  } else {
  alert("The most important franchise ever, the story of DOM(inic) Toretto/s family. It/s not about car, it/s about family.") 
}
})
}

//Create a new <div> before the list, using createElement and insertBefore
//Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"

const ul_list = document.querySelector ('ul')
/*console.log (ul_list)*/
const div = document.createElement ('div');
ul_list.insertAdjacentHTML('beforebegin', '<div></div>')

const div1 = document.querySelector ('div')
const select = document.createElement ('select');
div1.insertAdjacentHTML('afterbegin', '<select></select>')

const select2 = document.querySelector ('select')
option = document.createElement ('option')
select2.insertAdjacentHTML('afterbegin', "<option>normal franchise</option>")

const option2 = document.createElement ('option')
const option1 = document.querySelector ('option')
option1.insertAdjacentHTML ('beforebegin', "<option>important franchise</option>")

//Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, 
//only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')


const class_important = document.querySelector ('.important')
/*console.log (class_important)*/

const selector = document.querySelector ('select').addEventListener ('change', (evt)=> {
  const option_added1 = document.querySelectorAll ('option')
  for (item of option_added1) {
  if (evt.target.value === 'important franchise'){
  /*console.log ('hello')*/
  const liitem = document.querySelectorAll('li')
    for (it of liitem){
it.style.visibility ='hidden'
class_important.style.visibility = 'visible'
 } 
  } else if (evt.target.value === 'normal franchise'){
    const liItem2 = document.querySelectorAll ('li')
    for (el of liItem2){
      el.style.visibility ='visible'
    }
    
  }
}
})

//(*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
 
const ul_li = document.querySelector('ul')
/*console.log (ul_li)*/
const li_list = document.querySelectorAll ('li')
/*const childNodes = ul_li.children*/

for (i=0; i< li_list.length; i+=1) {
  for (k=i+1; k < li_list.length; k+=1){
    if (li_list[i].isEqualNode(li_list[k])){
      li_list[k].parentNode.removeChild(li_list[k])
    }
  }
} 


// Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, 
//however Fast and Furious should remain the first element (most important franchise ever, remember?)

//Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned


document.querySelector('body').addEventListener('keyup', (ev) => {
if (ev.keyCode === 82) {
  const ulChild = ul_li.children
  for (let i=1; i< ulChild.length; i+=1){
    let random = Math.floor(Math.random() * ulChild);
    ul_li.append(ulChild[i])
  }
  
}else if (ev.keyCode === 68){
  const node = document.querySelectorAll('li')[0]
  const clone = node.cloneNode(true);
  ul_li.appendChild(clone)
}
})


