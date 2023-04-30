const signBtn = document.querySelector("#sign-btn");
const logBtn = document.querySelector("#log-btn");

const registerForm = document.querySelector(".register-form");
const logForm = document.querySelector(".log-form");

signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.toggle("active-form");
  logForm.classList.toggle("active-form");
});
logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  logForm.classList.toggle("active-form");
  registerForm.classList.toggle("active-form");
});
