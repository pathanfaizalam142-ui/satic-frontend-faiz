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
forn.addEventListener("submit",function(event){
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