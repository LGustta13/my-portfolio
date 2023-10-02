import { languages } from "./languages.js"

let language = languages.find((element) => element.id === "pt-br")
const icon = document.querySelector("#menu-translate")
icon.addEventListener("click", toggleLang)

const header = document.querySelector(".header")
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const experiences = document.querySelector(".experiences")
const education = document.querySelector(".education")
const portfolio = document.querySelector(".portfolio")
const contact = document.querySelector(".contact")
const footer = document.querySelector(".footer")

setLanguageHTML()

function toggleLang() {
  if (language.id === "pt-br") {
    language = languages.find((element) => element.id === "en-us")
  } else {
    language = languages.find((element) => element.id === "pt-br")
  }

  setLanguageHTML()
}

function setLanguageHTML() {
  // Header //
  header.querySelector("a").innerText = language.header
  header.querySelectorAll("nav a").forEach((element, index) => {
    element.innerText = language.nav[index]
  })

  // Home //
  home.querySelector("h3").innerText = language.homeContent.h1
  home.querySelector("h1").innerText = language.homeContent.h2
  home.querySelector("h3 p").innerText = language.homeContent.h3
  home.querySelector("p.description").innerText =
    language.homeContent.description

  typed.strings = [language.homeContent.span1, language.homeContent.span2]

  // About //
  about.querySelector("h2").innerHTML = language.aboutContent.h1
  about.querySelector(".about-container p").innerHTML =
    language.aboutContent.description

  // Experiences //
  experiences.querySelector(".heading").innerHTML =
    language.experiencesContent.h1
  experiences.querySelector(".experiences-container").innerHTML = ""

  language.experiencesContent.content.map((experience) => {
    experiences.querySelector(".experiences-container").innerHTML += `
  <div class="experiences-box">
    <i class='bx bx-code-alt'></i>
    <h3>${experience.title}</h3>
    <h4><span>${experience.begin}</span> | <span>${experience.end}</span></h4>
    <p>${experience.description}</p>
  </div>
  `
  })

  // Education //
  education.querySelector(".heading").innerHTML = language.educationContent.h1
  education.querySelector(".education-container").innerHTML = ""

  language.educationContent.content.map((ed) => {
    education.querySelector(".education-container").innerHTML += `
    
    <div class="education-box">
      <div class="his-circle"></div>
      <h3>${ed.title}</h3>
      <h4><span>${ed.begin}</span> | <span>${ed.end}</span></h4>
      <p>${ed.place}</p>
    </div>
  `
  })
  education.querySelector(".education-container").innerHTML +=
    '<div class="his-line"></div>'
    
  // Portfolio //
  portfolio.querySelector(".heading").innerHTML = language.portfolioContent.h1
  portfolio.querySelector(".portfolio-container").innerHTML = ""

  language.portfolioContent.content.map((project) => {
    portfolio.querySelector(".portfolio-container").innerHTML += `
    <div class="portfolio-box">
      <div class="portfolio-box-bg">
        <div class="gradient">
          <img src="${project.imgURL}" alt="">
        </div>
        <h3>${project.title}</h3>
        <div class="text">
          ${project.stacks
            .map((stack) => {
              return `<p>${stack}</p>`
            })
            .join("")}
        </div>
      </div>

      <div class="portfolio-layer">
        <h4>${project.title}</h4>
        <p>${project.category} | ${project.description}</p>
        <div class="icons">
          <a href="${project.link}" target="_blank">
            <i class='bx bx-link-external'></i>
          </a>
          <a href="${project.github}" target="_blank">
            <i class='bx bxl-github'></i>
          </a>
        </div>
      </div>
    </div>
  `
  })

  contact.querySelector(".heading").innerHTML = language.contactContent.h1
  contact.querySelectorAll("input").forEach((element, index) => {
    if (element.getAttribute("type") !== "submit") {
      element.setAttribute(
        "placeholder",
        language.contactContent.placeholder[index]
      )
    } else {
      element.setAttribute("value", language.contactContent.button)
    }
  })
  contact
    .querySelector("textarea")
    .setAttribute("placeholder", language.contactContent.placeholder[4])

  footer.querySelector(".footer-text p").innerText = language.footer
}
