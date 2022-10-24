let ol = document.querySelector('ol');
let li = document.querySelectorAll('li')
for (item of li){
ol.prepend(ol.lastChild)

let a = ol.children[1]
let b = ol.children [2]
/*a.appendChild(b)*/

}

//Move the <h2> of the third section in the second one and vice-versa

let sect = document.querySelector ('section')

let section3 = sect.nextElementSibling;
/*console.log (section3.textContent)*/
let title1 = section3.firstElementChild;
/*console.log (title1.textContent)*/

let section2 = section3.nextElementSibling
console.log (section2.textContent);

let div = document.querySelector('div')

let titleh2 = div.firstElementChild;
console.log (titleh2.textContent)

div.prepend(title1);
section3.prepend(titleh2)

section2.remove()