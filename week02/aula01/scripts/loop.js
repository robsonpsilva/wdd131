const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for(let i = 0; i<studentReport.length; i++){
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i < LIMIT){
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
    i++;
}
studentReport.forEach(myFunction);

function myFunction(value){
    if (value < LIMIT){
        console.log(value);
    }
}

for(let x in studentReport){
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
}