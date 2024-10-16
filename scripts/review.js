const nreviews = document.getElementById("numberofreviews");
let reviews = localStorage.getItem("reviewnumber");
let sum = 0;
if (reviews!== null){
    sum = parseInt(reviews) + 1;
}
else{
    sum = 1; 
}
localStorage.setItem("reviewnumber", sum);

nreviews.textContent = `The number of completed reviews is: ${sum}`;

