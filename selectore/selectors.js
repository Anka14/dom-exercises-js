
//Add a title attribute to every element that has the important class, stating This is an important item.
let attribute = document.querySelectorAll ('.important');
console.log(attribute);
for (let item of attribute) {
item.setAttribute ('title', 'this is an important item')
console.log (item)
}

/*let img = document.querySelectorAll ('img.important');
console.log (img)
for (let elem of img){
    elem.style.display ='none'

}*/
//Select all the img tags and loop through them. If they have no important class, turn their display property to none
let img = document.querySelectorAll('img');
console.log (img)
for (let elem of img){
  if (elem.classList.contains('important')){
    elem.style.display ='none'
  }
    
}
//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
let par = document.querySelectorAll('p');
for (let el of par) {
  console.log (el.innerHTML);
  console.log (el.className);
if (!el.className){
  let r = Math.floor(Math.random() *255);
let g = Math.floor(Math.random() *255);
let b = Math.floor(Math.random() *255);
 
 el.style.color = 'rgb('+ r +', '+ g +','+ b +')';
 

  
}

} 



  
