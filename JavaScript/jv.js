
// const newmark = document.getElementById("marks");
// const id = document.getElementById("id");
// const button = document.getElementById("btn");
// const h = document.querySelector("h3");

// const students = [
//   { id: 1, name: "Asha", marks: 72 },
//   { id: 2, name: "Ravi", marks: 48 },
//   { id: 3, name: "Meera", marks: 90 },
// ];

// function addStudents(student) {
//   const addstudent = [...students, ...student]
//   return addstudent;
// }
// const addstudent = addStudents([{ id: 4, name: "ardra", marks: 80 }]);

// function updateMarks(student, newMarks, id) {

//   return student.map(student =>
//     student.id === id ? { ...student, marks: newMarks } : student
//   );

// }


// button.addEventListener("click", () => {
//   let updatedStudent = updateMarks(addstudent, Number(newmark.value), Number(id.value));
//   for (let i = 0; i < updatedStudent.length; i++) {
//     console.log(updatedStudent[i]);
//   }
// });


// h.addEventListener("click", () => {
//   h.classList.toggle("done");
//   console.log(h.target)
// })
let p = document.getElementById('btn2');
const items = document.querySelector('#btn');



items.addEventListener('click', function handle() {
  for (let i = 0; i < 10000; i++) {
  console.log(i);
  }
});
document.removeEventListener('click', function handle() {
  for (let i = 0; i < 10000; i++) {
  console.log('clicked<br>');
  }
});


// let hai = Array.from(p);
// hai.push(items)
// console.log(hai);
// console.log(typeof items);
//   items.innerText = 'your paragraph is rewritten '+p.innerText;