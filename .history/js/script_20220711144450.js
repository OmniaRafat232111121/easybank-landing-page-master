// Button Switch
const header = document.querySelector(".header");
const Hamburger = document.querySelector(".nav__hamburger");
const Close = document.querySelector(".nav__close");
const navContent = document.querySelector(".nav__content-container");
const overlay = document.querySelector(".overlay");

Hamburger.addEventListener("click", function () {
  Hamburger.classList.add("close");
  Close.classList.remove("close");
  navContent.classList.remove("opacity-0");
  overlay.classList.remove("opacity-0");
});

Close.addEventListener("click", function () {
  Hamburger.classList.remove("close");
  Close.classList.add("close");
  navContent.classList.add("opacity-0");
  overlay.classList.add("opacity-0");
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.intro__first, .btn, .nav__hamburger` , {origin: "right"});
sr.reveal( `.inner__link, .about__animation, .article__animation, .footer__animation`, {interval: 100});
sr.reveal(`.nav__logo, .intro__second`, {origin: "left"});