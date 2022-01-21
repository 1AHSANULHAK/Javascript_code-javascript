console.log("You are in tutorial 13");
//single line selector
//multiline Selector
 let element=document.getElementById('myfirst');
 //element= element.className;
 //element=element.childNodes;
 //element = element.parentNode;
 //element.style.color='red';
 //element.innerText='Ahsanulhak is a good boy';
//element.innerHTML='Ahsanulhak is a good boy';
//console.log(element);
//let sel = document.querySelector('#myfirst')
//let sel = document.querySelector('.ahsan');
//let sel = document.querySelector('div');
//console.log(sel);


//multi Selector
element = document.getElementsByClassName('child red');
element = document.getElementsByClassName('container');
console.log(element[0].getElementsByClassName('child'));
