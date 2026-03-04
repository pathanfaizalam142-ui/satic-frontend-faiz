
console.log("day 1 task loaded");
const hamburger = document.getElementById("hamburger");
const navbarr = document.querySelector(".navbarr");
const navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navbarr.classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");

  if (navbarr.classList.contains("nav-open")) {
    hamburger.innerHTML = "&times;";
  } else {
    hamburger.innerHTML = "&#9776;";
  }
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarr.classList.remove("nav-open");
    document.body.classList.remove("no-scroll");
    hamburger.innerHTML = "&#9776;";
  });
});


const form=document.querySelector(".search-form");
const input = document.getElementById("searchInput");
form.addEventListener("submit",function(event){
  event.preventdefault();
  const value=input.value.trim();
  if (value===""){
    alert("please enter a search term.");
    return;
  }
  console.log("searching for :",value);
  input.value="";
});


function showToast(type) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  // Message
  const message = document.createElement("span");
  message.textContent =
    type === "success"
      ? "✔ Action completed successfully!"
      : "⚠ Something went wrong!";

  // Close Button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";

  closeBtn.addEventListener("click", () => {
    removeToast(toast);
  });

  toast.appendChild(message);
  toast.appendChild(closeBtn);
  container.appendChild(toast);

  // Auto Dismiss after 3 seconds
  setTimeout(() => {
    removeToast(toast);
  }, 3000);
}

function removeToast(toast) {
  toast.style.opacity = "0";
  toast.style.transform = "translateX(100%)";

  setTimeout(() => {
    toast.remove(); // DOM Cleanup (Strict Requirement)
  }, 300);
}


document.addEventListener("DOMContentLoaded", function () {

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  const submitBtn = document.getElementById("submitBtn");

  function validateForm() {

    let nameValid = false;
    let emailValid = false;
    let messageValid = false;

    /* NAME VALIDATION */
    if (nameInput.value.trim().length < 3) {
      nameInput.classList.add("error");
      nameInput.classList.remove("success");
      nameError.textContent = "Name must be at least 3 characters long.";
    } else {
      nameInput.classList.remove("error");
      nameInput.classList.add("success");
      nameError.textContent = "";
      nameValid = true;
    }

    /* EMAIL VALIDATION */
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add("error");
      emailInput.classList.remove("success");
      emailError.textContent = "Enter a valid email.";
    } else {
      emailInput.classList.remove("error");
      emailInput.classList.add("success");
      emailError.textContent = "";
      emailValid = true;
    }

    /* MESSAGE VALIDATION */
    if (messageInput.value.trim() === "") {
      messageInput.classList.add("error");
      messageInput.classList.remove("success");
      messageError.textContent = "Message cannot be empty.";
    } else {
      messageInput.classList.remove("error");
      messageInput.classList.add("success");
      messageError.textContent = "";
      messageValid = true;
    }

    /* BUTTON ENABLE LOGIC */
    if (nameValid && emailValid && messageValid) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  /* REAL TIME VALIDATION */
  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  messageInput.addEventListener("input", validateForm);

  /* Prevent actual submit */
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Form submitted successfully!");
  });

  /* Run once on load */
  validateForm();

});