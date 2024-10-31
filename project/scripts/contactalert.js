const ncontacts = document.getElementById("numberofcontacts");
let contacts = localStorage.getItem("contactnumber");
let sum = 0;
if (contacts == null){
 contacts = 0;
}
if (ncontacts !== null){
    sum = parseInt(contacts) + 1;
}
else{
    sum = 1; 
}
localStorage.setItem("contactnumber", sum);

ncontacts.textContent = `${sum}`;

function goBack() {
    window.history.back();
}

