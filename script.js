const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dobInput = document.getElementById("dob");
const courseInput = document.getElementById("course");
const addressInput = document.getElementById("address");
const successMessage = document.getElementById("successMessage");

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });

  successMessage.textContent = "";
}

phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  let isValid = true;
  const selectedGender = document.querySelector('input[name="gender"]:checked');

  if (nameInput.value.trim().length < 3) {
    showError("nameError", "Please enter your full name.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  if (!/^[0-9]{10}$/.test(phoneInput.value)) {
    showError("phoneError", "Phone number must contain exactly 10 digits.");
    isValid = false;
  }

  if (dobInput.value === "") {
    showError("dobError", "Please select your date of birth.");
    isValid = false;
  }

  if (courseInput.value === "") {
    showError("courseError", "Please select a course.");
    isValid = false;
  }

  if (!selectedGender) {
    showError("genderError", "Please select your gender.");
    isValid = false;
  }

  if (addressInput.value.trim().length < 10) {
    showError("addressError", "Please enter your complete address.");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Registration submitted successfully!";
    form.reset();
  }
});