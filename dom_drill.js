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
  ul.prepend(nodeChild [5])

/* const a = ul.children[4]
  console.log (a.textContent)
  const b = ul.children [1]*/
 /* console.log (b.textContent)*/
  /*b.append(a) */
  
}