import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/main.scss";
import "./assets/photos-header-portfolio.png";
import "./assets/name-label.png";
import "./assets/arrow-scroll.png";
import "./assets/photos-hero.png";
// import "./assets/photos-hero.webp";
import "./assets/photo-3d-profile.png";
import "./assets/placeholder-image.jpg";
import "./assets/link-border-nav.png";
import {
  createPortfolioElements,
  createTestimonyElements,
  createServiceElements,
} from "./utils/createElements";

gsap.registerPlugin(ScrollTrigger);
createPortfolioElements();
createTestimonyElements();
createServiceElements();

let isShowNav = false;

function validate() {
  const formContact = document.getElementById("form-contact");
  const input = document.querySelectorAll(".input-validate");
  const error = document.getElementById("error-message");
  const errorSubmit = document.getElementById("error-submit");

  Array.from(input).forEach((value) => {
    value.addEventListener("input", (e) => {
      if (value.type === "email") {
        if (!e.target.value.includes("@")) {
          error.classList.add("show");
        } else {
          error.classList.remove("show");
        }
      }
    }),
      value.addEventListener("change", () => {
        error.classList.remove("show");
      });
  });

  formContact.addEventListener("submit", (e) => {
    console.log(e);
    Array.from(input).forEach((value) => {
      if (!value.value) {
        errorSubmit.classList.add("show");
      } else {
        errorSubmit.classList.remove("show");
      }
    });

    e.preventDefault();
  });
}

validate();

window.addEventListener("load", (e) => {
  const hiddenData = document.querySelectorAll("#show-data");
  const photoAboutMe = document.querySelector(".rotate-photo");
  const headerAboutMe = document.getElementById("header-translate");
  const photoPortfolio = document.querySelector(
    "#photos-show-portfolio:first-child"
  );

  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: headerAboutMe,
      start: "top 60%",
      end: "10% 30%",
      scrub: true,
      // markers: true
    },
  });

  const tlPhotoAboutMe = gsap.timeline({
    scrollTrigger: {
      trigger: photoAboutMe,
      start: "-=170 60%",
      end: "10% 50%",
      scrub: true,
      // markers: true
    },
  });
  const tlPhotoPortfolio = gsap.timeline({
    scrollTrigger: {
      trigger: photoPortfolio,
      start: "-=50 10%",
      end: "10% -=100",
      // scrub: true,
      // markers: true
    },
  });
  tlPhotoPortfolio.from(photoPortfolio, {
    // rotate: -35,
    yPercent: -150,
    duration: 0.3,
  });
  //animations////////////////////
  if (window.innerWidth > 768) {
    tlPhotoAboutMe.to(photoAboutMe, {
      rotate: 10,
      opacity: 1,
      duration: 1,
    });
    tlHeader.to(headerAboutMe, {
      yPercent: 300,
      opacity: 1,
      duration: 1,
    });
  }
  let options = {
    root: null,
    rootMargin: "0px 0px 150px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entrie) => {
      const defaultSrc = entrie.target.dataset.defaultsrc
      const src = entrie.target.dataset.src
      if (entrie.isIntersecting) {
        entrie.target.setAttribute("src", src);
      }
    });
  }, options);
  Array.from(hiddenData).forEach((data) => observer.observe(data));
});


document.addEventListener("click", (e) => {
  isShowNav = !isShowNav;
  const menu = document.querySelector(".App-nav-links");
  const buttonNavTarget = e.target.closest(".content-button-nav");
  const buttonNavTargetOpen = document.querySelector(".open-icon");
  const buttonNavTargetClose = document.querySelector(".close-icon");

  if (buttonNavTarget) {
    if (isShowNav) {
      menu.classList.add("open");
      buttonNavTargetOpen.classList.add("close");
      buttonNavTargetClose.classList.add("open");
    } else {
      menu.classList.remove("open");
      buttonNavTargetOpen.classList.remove("close");
      buttonNavTargetClose.classList.remove("open");
    }
  }
});
