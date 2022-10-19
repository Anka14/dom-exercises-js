const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

//create divs with color
let section = document.querySelector('.displayedsquare-wrapper')
let div_on_square = document.createElement('div');
div_on_square.className = 'displayedsquare  green violet orange';
section.prepend(div_on_square);

/*let div_green = document.createElement ('div')
div_green.className = 'green';
div_on_square.prepend(div_green)

let div_violet = document.createElement ('div')
div_violet.className = 'violet';
div_On_square.append(div_violet)

let div_orange = document.createElement ('div')
div_orange.className = 'orange';
div_on_square.append(div_orange)*/



//creat li*/
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)

  

}