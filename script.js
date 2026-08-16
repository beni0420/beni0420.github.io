let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetHeight - 150;
    let height = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forech((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bi-x-lg");
  navbar.classList.toggle("active");
};

//formulario

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://formspree.io/f/xjybeppz", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.style.display = "block";
        status.textContent = "Thanks! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.style.display = "block";
        status.textContent = "Ops! There was a problem sending your message.";
        status.style.color = "red";
      }
    })
    .catch(() => {
      status.style.display = "block";
      status.textContent = "Ops! There was a problem sending your message.";
      status.style.color = "red";
    });
});
