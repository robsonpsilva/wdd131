
const in1 = document.querySelector('#favchap');  // defining an input variable
const delbtn = document.querySelector('button'); // defining a button variable
const list1 = document.querySelector('#list'); //defining a list variable
const btnSubmit = document.getElementById('btnSubmit');

function appendUserChoice(){
    
    const text= document.createTextNode(in1.value); //Getting input entry
    
    if (text.length != 0){//Verifing if different of empty string
        //If there is a value, add a li element in the ordered list
        const bookLi = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.ariaLabel = 'Delete scripture line'
        deleteButton.textContent= 'X';
        bookLi.appendChild(text);
        bookLi.appendChild(deleteButton);
        list1.append(bookLi);
        in1.value = '';
    }
    else{
        alert('You need to inform a scripture book and chapter!')
        in1.focus();
    }
    
}
function deleteUserChoice(){
    
}

btnSubmit.addEventListener('click', appendUserChoice);
delbtn.addEventListener('click', deleteUserChoice);

