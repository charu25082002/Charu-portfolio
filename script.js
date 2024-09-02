let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(" header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(" header nav a  [href*=" + id + "]")
          .classlist.add("active");
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  let circle = document.querySelectorAll(".circle");
  circle.forEach(function (progress) {
    let degree = 0;
    var targetDegree = parseInt(progress.getAttribute("data-degree"));
    let color = progress.getAttribute("data-color");
    let number = progress.querySelector(".number");

    var intervel = setInterval(function () {
      degree += 1;
      if (degree > targetDegree) {
        clearInterval(intervel);
        return;
      }
      progress.style.background = `conic-gradient(
       ${color} ${degree}%, #222 0% )`;
      number.innerHTML = degree + "<span>%</span>";
      number.style.color = color;
    }, 50);
  });
});

let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let list = document.querySelectorAll("li");

menuToggle.onclick = () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
