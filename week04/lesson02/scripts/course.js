// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:[['STC 353', 26, 'TTh', 'Bro T'], ['STC 347', 28, 'TTh', 'SIS A']],
};

setNameCode(aCourse);
setTable(aCourse);

function setNameCode(course){
    const courseName = document.getElementById('courseName');
    const courseCode = document.getElementById('courseCode');
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function setTable(course){
    let tab = document.getElementById('sections');
    let newline = tab.insertRow();
    let cell1 = newline.insertCell(0);
    let cell2 = newline.insertCell(1);
    let cell3 = newline.insertCell(2);
    let cell4 = newline.insertCell(3);
    let cell5 = newline.insertCell(4);

    cell1.textContent = '1';
    cell2.textContent = course.sections[0][0];
    cell3.textContent = course.sections[0][1];
    cell4.textContent = course.sections[0][2];
    cell5.textContent = course.sections[0][3];

    newline = tab.insertRow();
    cell1 = newline.insertCell(0);
    cell2 = newline.insertCell(1);
    cell3 = newline.insertCell(2);
    cell4 = newline.insertCell(3);
    cell5 = newline.insertCell(4);

    cell1.textContent = '2';
    cell2.textContent = course.sections[1][0];
    cell3.textContent = course.sections[1][1];
    cell4.textContent = course.sections[1][2];
    cell5.textContent = course.sections[1][3];
    
}
