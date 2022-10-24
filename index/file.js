

let node = document.querySelector("title");
console.log(node.textContent);

node.innerHTML = 'Modyfing the Dom';
console.log (node.innerHTML)

let body = document.querySelector ('body');

let r = Math.floor(Math.random() *255);
let g = Math.floor(Math.random() *255);
let b = Math.floor(Math.random() *255);
console.log ( r, g, b);

body.style.background  = 'rgb('+ r +', '+ g +','+ b +')';

for (const item of body.children){
  console.log(item)
 
}
/*console.log(body.children)*/




