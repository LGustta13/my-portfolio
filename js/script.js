// toggle icon navbar //
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

// scroll sections active link //

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  // Aponta para todas as seções
  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute("id")

    // Porém de todas, somente uma entra nesta condição
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        // Tira o active de todos as seções e adiciona somente para o id que entrou na condição
        links.classList.remove("active")
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active")
      })
    }
  })

  // sticky navbar //
  let header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 100)

  // remove toggle icon and navbar when click navbar link //
  menuIcon.classList.remove("bx-x")
  navbar.classList.remove("active")
}

// shake icons //
let stack_icons = document.querySelectorAll(".about-stacks i")
stack_icons.forEach((stack) => {
  stack.onmouseover = () => {
    stack.classList.add("bx-tada")
  }
  stack.onmouseleave = () => {
    stack.classList.remove("bx-tada")
  }
})

// Scroll reveal //
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 1000,
  delay: 150,
})

ScrollReveal().reveal(".home-content, .heading", { origin: "top" })
ScrollReveal().reveal(
  ".home-img, .services-container, .education-container, .education-box, .portfolio-box, contact-form",
  { origin: "bottom" }
)
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" })
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" })
ScrollReveal().reveal(".about-stacks", { origin: "bottom" })

// Typed js //
const typed = new Typed(".multiple-text", {
  strings: ["Desenvolvedor Frontend", "Analista de Automação"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})
