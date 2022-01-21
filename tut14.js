console.log("you are in tut 14");
let element = document.createElement("li");
element.className = 'childhood';
element.id = 'credits';
element.setAttribute('title','mytitle');
element.innerText="THIS IS CREATED BY ahsanulhak";

console.log(element);
let ul = document.querySelector('ul.this')
ul.appendChild(element);
console.log(ul);

elem2 =document.createElement('h2');
elem2.id='yes';
elem2.className='no';

element.replaceWith(elem2);
console.groupCollapsed(elem2);
let myul = document.getElementById('myul');
myul.removeChild(document.getElementById('lui'));
console.log(elem2);
let pr = elem2.getAttribute('id');
console,log(pr);