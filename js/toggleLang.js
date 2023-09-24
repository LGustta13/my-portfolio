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
  header.querySelector("a").innerText = language.header
  header.querySelectorAll("nav a").forEach((element, index) => {
    element.innerText = language.nav[index]
  })

  home.querySelector("h3").innerText = language.homeContent.h1
  home.querySelector("h1").innerText = language.homeContent.h2
  home.querySelector("h3 p").innerText = language.homeContent.h3
  home.querySelector("p.description").innerText =
    language.homeContent.description

  typed.strings = [language.homeContent.span1, language.homeContent.span2]
}
