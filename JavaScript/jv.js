const form = document.getElementById("myForm");
const name = document.getElementById("username");
const nameError = document.getElementById("name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password")
const passwordError = document.getElementById("password-error")
const confirmPassword = document.getElementById("confirm-password")
const confirmPasswordError = document.getElementById("confirm-password-error")
const phone = document.getElementById("phone")
const phoneError = document.getElementById("phone-error")
const sub = document.getElementById("subject")
const subError = document.getElementById("subject-error")
const college = document.getElementById("comment")
const check = document.getElementById("agree")
const checkError = document.getElementById("agree-error")



function formValidation(){
  let valid = true;

  if(name.value.trim() === ""|| name.value.length > 20){
    nameError.textContent = "Please enter a valid name (max 20 characters).";
    valid = false;
  }else{
    nameError.textContent = "";
  }
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(email.value.trim() === ""|| emailPattern.test(email)){
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }else{
    nameError.textContent = "";
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if(password.value.trim() === ""|| !passwordRegex.test(password.value)){
    passwordError.textContent = "Please enter a valid password (8-20 characters, including uppercase, lowercase, number, and special character).";
    valid = false;
  }else{
    passwordError.textContent = "";
  }

  if(confirmPassword.value.trim() === ""|| confirmPassword.value !== password.value){
    confirmPasswordError.textContent = "Passwords do not match.";
    valid = false;
  }else{
    confirmPasswordError.textContent = "";
  }
  const phoneRegex = /^[6-9]\d{9}$/;
  if(phone.value.trim() === ""|| !phoneRegex.test(phone.value)){
    phoneError.textContent = "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.";
    valid = false;
  }else{
    phoneError.textContent = "";
  }
  
  if(sub.value.trim() === ""){
    subError.textContent = "Please enter a subject.";
    valid = false;
  }else{
    subError.textContent = "";
  }

  if(!check.checked){
    checkError.textContent = "Please fill it"
    valid = false
  }else{
    checkError.textContent = ""
  }


}