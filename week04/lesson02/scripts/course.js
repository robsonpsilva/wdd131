// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [1, ['STC 353', 26, 'TTh', 'Bro T']],
};

setNameCode(aCourse);

function setNameCode(course){
    const courseName = document.getElementById('courseName');
    const courseCode = document.getElementById('courseCode');
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}
