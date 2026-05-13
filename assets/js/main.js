fetch("layout/head.html")
.then(res => res.text())
.then(data => {
  document.getElementById("head").insertAdjacentHTML("beforeend", data);
});

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

