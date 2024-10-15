
const in1 = document.querySelector('#favchap');  // defining an input variable
const delbtn = document.querySelector('button'); // defining a button variable
const list1 = document.querySelector('#list'); //defining a list variable
const btnSubmit = document.getElementById('btnSubmit');
const key = 'books';
let chaptersArray = getChapterList() || [];


// for (let i = 0; i < localStorage.length; i++) {
//     if (localStorage.length > 0){
//         const chave = localStorage.key(i);
//         const bookLi = document.createElement('li');
//         const deleteButton = document.createElement('button');
//         const text = document.createTextNode(localStorage.getItem(chave));
//         deleteButton.ariaLabel = 'Delete scripture line'
//         deleteButton.textContent= 'X';
//         deleteButton.style.color = 'red';
//         bookLi.appendChild(text);
//         bookLi.appendChild(deleteButton);
//         bookLi.id = chave;
//         list1.append(bookLi);
//     }
    
    
// }

function getChapterListchaptersArray (){
    chaptersArray = localStorage.getItem('books');
    return chaptersArray;
}

function appendUserChoice(){
    
    const text= document.createTextNode(in1.value); //Getting input entry
    
    if (text.length != 0){//Verifing if different of empty string
        //If there is a value, add a li element in the ordered list
        const bookLi = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.ariaLabel = 'Delete scripture line'
        deleteButton.textContent= 'X';
        deleteButton.style.color = 'red';
        bookLi.appendChild(text);
        bookLi.appendChild(deleteButton);
        bookLi.id = books.length;
        books.push(text.textContent);
        list1.append(bookLi);
        in1.value = '';
        localStorage.setItem(key, JSON.stringify(books) );
    }
    else{
        alert('You need to inform a scripture book and chapter!')
        in1.focus();
    }
    
}
function deleteUserChoice(event){
    localStorage.removeItem(event.target.parentElement.id);

    list1.removeChild(event.target.parentElement);
    in1.focus();
}

btnSubmit.addEventListener('click', appendUserChoice);
list1.addEventListener('click', function(event) {
    // Verifica se o elemento clicado é um <li>
    if (confirm('Do you confirm that you want to delete this scripture from the list?')){
        deleteUserChoice(event);
    }
});

