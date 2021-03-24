// Nav
const header = document.querySelector("header")
const navBtn = document.querySelector(".nav__btn")
const navImg = document.querySelector(".nav__btn img")
const navLinks = document.querySelector(".nav__links")

const responsiveNav = () => {
  navLinks.classList.toggle("nav__links--active")
  header.classList.toggle("header--fixed")
  navLinks.classList.contains("nav__links--active")
    ? (navImg.src = "./img/menu-close.png")
    : (navImg.src = "./img/menu-open.png")
}

navBtn.onclick = responsiveNav
window.onresize = () => {
  navLinks.classList.remove("nav__links--active")
  header.classList.remove("header--fixed")
  navImg.src = "./img/menu-open.png"
  handleResponsiveLayout()
}
window.onload = () => {
  handleResponsiveLayout()
}

// Suggestions Layout
const suggestionsArticle = document.querySelectorAll(".suggestions .article")[1]
const suggestionsImg = suggestionsArticle.querySelector(".article__img")
const suggestionsText = suggestionsArticle.querySelector(".article__text")

const handleResponsiveLayout = () => {
  if (window.innerWidth < 768) {
    suggestionsArticle.insertBefore(suggestionsImg, suggestionsText)
  } else {
    suggestionsArticle.insertBefore(suggestionsText, suggestionsImg)
  }
}
