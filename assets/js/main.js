// fetch("layout/head.html")
// .then(res => res.text())
// .then(data => {
//   document.getElementById("head").insertAdjacentHTML("beforeend", data);
// });

fetch("layout/header.html")
.then(res => res.text())
.then(data => {
  document.getElementById("header").innerHTML = data;
});

fetch("layout/footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer").innerHTML = data;
});



document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".navbar-nav a").forEach(link => {
    link.addEventListener("click", function () {
      const menu = document.querySelector(".navbar-collapse");
      if (menu && menu.classList.contains("show")) {
        new bootstrap.Collapse(menu).hide();
      }
    });
  });
});


const counters = document.querySelectorAll('.counter');

const startCounter = () => {

  counters.forEach(counter => {

    const target = +counter.getAttribute('data-target');
    const speed = 200;
    const increment = target / speed;

    const updateCounter = () => {

      const current = +counter.innerText;

      if(current < target){

        counter.innerText = Math.ceil(current + increment);

        setTimeout(updateCounter, 10);

      } else {

        if(target === 76){
          counter.innerText = target + '%';
        } else {
          counter.innerText = target + '+';
        }

      }

    };

    updateCounter();

  });

};

const statsSection = document.querySelector('.stats');

let started = false;

window.addEventListener('scroll', () => {

  const sectionTop = statsSection.offsetTop - 500;

  if(window.scrollY > sectionTop && !started){

    startCounter();
    started = true;

  }

});
