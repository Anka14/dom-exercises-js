let section1 = document.createElement('section');
let par1 = document.createElement ('p')
par1.textContent = ' Anna';
section1.append (par1)


let section2 = document.createElement('section');
let par2 = document.createElement ('p')
par2.textContent = ' Darija';
section2.append (par2)


let section3 = document.createElement('section');
let par3 = document.createElement ('p')
par3.textContent = ' Arsenija';
section3.append (par3)

let section4 = document.createElement('section');
let par4 = document.createElement ('p')
par4.textContent = ' Andrej';
section4.append (par4);

let section5 = document.createElement('section');
let par5 = document.createElement ('p')
par5.textContent = 'Ura';
section5.append(par5)

let section6 = document.createElement('section');
let par6 = document.createElement ('p')
par6.textContent = 'Nadin';
section6.append(par6)


let article = document.querySelector ('article')

article.append(section1);
article.append(section2);
article.append(section3);
article.append(section4);
article.append(section5);
article.append(section6);

let par = document.querySelectorAll('p') 
let parSection = document.querySelectorAll ('section1, section2, section3, section4, section5, section6')
 console.log (parSection);

for (let elem of par) {
let r = Math.floor(Math.random() *255);
let g = Math.floor(Math.random() *255);
let b = Math.floor(Math.random() *255);
 elem.style.color = 'rgb('+ r +', '+ g +','+ b +')';

 elem.style.background =((0.3 * r) + (0.59 * g) + (0.11 * b) <= 128) ? '#FFF' : '#000';

}



 
