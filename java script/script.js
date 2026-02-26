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