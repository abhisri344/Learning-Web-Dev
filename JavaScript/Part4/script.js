let element = document.getElementById('click');
console.log(element);

var paragraph = document.getElementById("para")
console.log(paragraph)

var ele=document.getElementsByClassName("cnt")
console.log(ele)
ele[0].style.background ="yellow";
// console.log(ele[0]);

// add class
ele[1].classList.add("bg-primary");

// remove class
ele[1].classList.remove("bg-primary");

// inner html
ele[1].innerHTML="Abhishek"

console.log(ele[1].innerText)


// tag name
console.log(document.getElementsByTagName('button'))

// Creating elem
tn=document.getElementsByTagName('div');
let createelem=document.createElement('p');
createelem.innerText="This is created para";
tn[0 ].appendChild(createelem);

// replace child
let createelem2=document.createElement('b');
createelem2.innerText="This is bold para";
tn[0 ].replaceChild(createelem2,createelem);

// remove child
tn[0].remove();
