//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">.


 let input = document.querySelector('#firstname')
console.log (input)

input.addEventListener ('keyup', function (e){
  let span = document.querySelector ('#display-firstname');
console.log (span)
  span.textContent = e.target.value;
  console.log (span)
})

//Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

let input_age = document.querySelector ('#age')
input_age.addEventListener ('keyup', function (event){
let section = document.querySelector ('#a-hard-truth')
 /* const  number_input = Number(input_age)*/
  if (input_age.value < 18) {
    section.style.visibility = 'hidden'
    console.log ('small')
  } else {
    section.style.visibility = 'visible'
    console.log ('big')
  
  }

})

//Well this is a common one. Add a keyup listener on both fields and show a visual hint 
//(for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

const pwd = document.querySelector('#pwd')
const input_confirm = document.querySelector('#pwd-confirm') 

function hint (){

 if (pwd.value.length < 6) {
 console.log ('less')
 pwd.style.background = 'red'
 }
 
 else {
   console.log ( 'ok')
   pwd.style.background ='white'
 }

 if (pwd.value.length !== input_confirm.value.length){
   input_confirm.style.background = 'red'
 } else {
   input_confirm.style.background = 'white'
 }

}
pwd.addEventListener ('keyup', hint);
input_confirm.addEventListener('keyup', hint);


//Finally, use a change listener on the <select> field to toggle a dark mode 
//on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
let body = document.querySelector ('body')
const option = document.querySelector ('option')
console.log (option.value)

const dark_mode_section = document.querySelector ('#toggle-darkmode').addEventListener ('change', function (){
  if (option.value === 'dark'){
    document.body.style.background ='black'
    document.body.style.color = 'white'

  }
  else{
    document.body.style.background ='white'
  }
})

