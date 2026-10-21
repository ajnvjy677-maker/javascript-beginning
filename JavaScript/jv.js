
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

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
  
  const fName = myForm["fName"].value;
  const lName = myForm["lName"].value;
  const email = myForm["email"].value;
  const password = myForm["password"].value;

  if (fName.trim() === ""){
    console.log("First name is required");
  }
  
  if (fName.trim().length > 20){
    console.log("First name should be less than 20 characters");
  }

  if (lName.trim() === ""){
    console.log("Last name is required");
  }

  if (lName.trim().length > 20){
    console.log("Last name should be less than 20 characters");
  }
  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    console.log("Invalid email address");
  }

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.match(passwordRegex)) {
    console.log("Invalid password");
  }
});

// let hai = Array.from(p);
// hai.push(items)
// console.log(hai);
// console.log(typeof items);
//   items.innerText = 'your paragraph is rewritten '+p.innerText;