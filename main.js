// Single Element
// const form = document.getElementById('my-form');
// console.log(form);
//  console.log((document.querySelector('h1')));

 // multiple element 
//  console.log(document.querySelectorAll('.item'));
//  console.log(document.getElementsByClassName('item'));
//  console.log(document.getElementsByTagName('li'));

// const ul = document.querySelector('.item');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent ='Hello';
// ul.children[1].innerText='sanjeev';
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     console.log(e.target.id);
//     document.querySelector('#my-form').style.background = 'red';
//     document.querySelector('.item').lastElementChild.innerHTML = '<h1>Hello</h1>';
    

// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit' , onSubmit);
function onSubmit(e){
    e.preventDefault();
    // localStorage.getItem('name' , nameInput);
    //     localStorage.getItem('email', emailInput);
    // var newName =document.getElementById('name').value;
    // console.log(newName);
    // var newEmail = document.getElementById('email').value;
    // console.log(newEmail);
    // localStorage.getItem('newName','newName');
    // localStorage.getItem('newEmail' , 'newEmail');


 if(nameInput.value === '' || emailInput.value === '') {
    // msg.innerHTML = 'sky';
        // alert('please enter fields')
        // localStorage.getItem('name' , nameInput);
        // localStorage.getItem('email', emailInput);

        // clear fields
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // localStorage.setItem('name' , 'nameInput');
        // localStorage.setItem('email', 'emailInput');

        

        userList.appendChild(li);
        localStorage.setItem('name' , nameInput.value);
        localStorage.setItem('email', emailInput.value);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }

}

