// examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText='Goodbye' ;
//console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].textContent = 'Item 3';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// for(var i=0; i< items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// GETELEMENTBYTAGNAME
//var li= document.getElementsByTagName('li');
//console.log('li');
//console.log(li[1]);li[2].textContent = 'Item 3';li[0].style.fontWeight = 'bold';
//li[1].style.fontWeight = 'bold';
//li[2].style.fontWeight = 'bold';
//li[3].style.fontWeight = 'bold';
//li[2].style.backgroundColor = 'green';

//var list4=document.getElementsByClassName("xyz");
// console.log(list4);
//list4[0].style.backgroundColor="red";
//list4[0].style.width="60px"

//QUERYSELECTOR

var header = document.querySelector('#main-header');
header.style.borderbottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

//QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// var even = document.querySelectorAll('li:nth-child(even)'); 

// for(var i=0; i< even.length; i++){
//     even[i].style.backgroundColor = '#ccc';
// }




















