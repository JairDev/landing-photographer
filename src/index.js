import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/main.scss";
import imagePortfolio1 from "./assets/photo1-port.png";
import imagePortfolio2 from "./assets/photo2-port.png";
import imagePortfolio3 from "./assets/photo3-port.png";
import imagePortfolio4 from "./assets/photo4-port.png";
import imagePortfolio5 from "./assets/photo5-port.png";
import imagePortfolio6 from "./assets/photo6-port.png";
import imagePortfolio7 from "./assets/photo7-port.png";
import "./assets/photos-header-portfolio.png";
import paperCard from "./assets/card-paper.png";
import "./assets/name-label.png";
import "./assets/arrow-scroll.png";
import "./assets/photos-hero.png";
import "./assets/photo-3d-profile.png";
import "./assets/placeholder-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const portfolioNode = document.querySelector(".App-portfolio-content-photos");
const testimonyNode = document.querySelector(".App-testimony-clients");
const serviceNode = document.querySelector(".App-service-content-services");

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
      value.addEventListener("change", (e) => {
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

// class Subject {
//   constructor() {
//     this.observers = []
//   }

//   subscribe(observer) {
//     this.observers.push(observer)
//   }

//   unSubscribe(observer) {
//     this.observers = this.observers.filter(element => element !== 0)
//   }

//   notify(object) {
//     this.observers.forEach(observer  => {
//       observer.notify(object)
//     })
//   }
// }

// class  TextSubject extends Subject {
//   constructor() {
//     super();
//     this.text = ""
//   }

//   notify(text) {
//     this.text = text
//     super.notify(this)
//   }
// }

// class Observer {
//   notify(object) {
//     document.getElementById("error-message").innerHTML = object.text
//     // console.log(object.text)
//   }
// }

// const text = new TextSubject()
// let miDiv = new Observer()
// text.subscribe(miDiv)

// document.getElementById("validate").addEventListener("input", (event) => {
//   text.notify(event.target.value)
// })

const dataPortfolio = [
  { name: "Abigail", src: imagePortfolio1 },
  { name: "Antonio", src: imagePortfolio2 },
  { name: "Manuel y Jose", src: imagePortfolio3 },
  { name: "Patricia", src: imagePortfolio4 },
  { name: "Carolina", src: imagePortfolio5 },
  { name: "Andres", src: imagePortfolio6 },
  { name: "Grecia", src: imagePortfolio7 },
];

const dataTestimony = [
  {
    name: "Arquette Duen",
    testimony:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s",
    src: paperCard,
  },
  {
    name: "Kialsd Sths",
    testimony:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s",
    src: paperCard,
  },
  {
    name: "Kierñ Lekjr",
    testimony:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s",
    src: paperCard,
  },
];

const dataService = [
  {
    title: "Paquete",
    services: {
      dvd: "1 DVD de 30 fotos digitales",
      sesion: "1 hora de sesión fotográfica",
      vestuario: "2 cambios de vestuario",
      fotos: "3 fotos impresas",
    },
    price: 50,
  },
  {
    title: "Paquete",
    services: {
      dvd: "1 DVD de 30 fotos digitales",
      sesion: "1 hora de sesión fotográfica",
      vestuario: "2 cambios de vestuario",
      fotos: "3 fotos impresas",
    },
    price: 80,
  },
];

const fragmentPortfolio = document.createDocumentFragment();
const fragmentTestimony = document.createDocumentFragment();
const fragmentService = document.createDocumentFragment();

dataPortfolio.forEach((photos) => {
  const div = document.createElement("div");
  const divContentTitle = document.createElement("div");
  const title = document.createElement("h6");
  const img = document.createElement("img");
  div.setAttribute("class", "portfolio-content-photos");
  div.setAttribute("id", "photos-show-portfolio");
  divContentTitle.setAttribute("class", "portfolio-content-paper");
  title.textContent = photos.name;
  img.setAttribute("src", "./assets/placeholder-image.jpg");
  img.setAttribute("data-src", photos.src);
  img.setAttribute("alt", "Fotografía de una persona");
  // img.setAttribute("id", "show-data");
  div.appendChild(img);
  div.appendChild(divContentTitle);
  divContentTitle.appendChild(title);
  fragmentPortfolio.appendChild(div);
});

dataTestimony.forEach((testimony) => {
  const div = document.createElement("div");
  const divContentTestimony = document.createElement("div");
  const testimonyText = document.createElement("p");
  const nameClient = document.createElement("h4");
  div.setAttribute("class", "testimony");
  div.appendChild(nameClient);
  div.appendChild(divContentTestimony);
  divContentTestimony.setAttribute("class", "testimony-content-testimony");
  divContentTestimony.appendChild(testimonyText);
  testimonyText.textContent = testimony.testimony;
  nameClient.textContent = testimony.name;
  fragmentTestimony.appendChild(div);
});

dataService.forEach((service, index) => {
  let priceFormat = `$${service.price}`;
  let titleFormat = `${service.title}` + " " + `${index + 1}`;
  const div = document.createElement("div");
  const divContentTitle = document.createElement("div");
  const ulContentServices = document.createElement("ul");
  const divContentPrice = document.createElement("div");
  const divContentButton = document.createElement("div");
  const button = document.createElement("button");
  const titleService = document.createElement("h4");
  const price = document.createElement("p");
  Object.values(service.services).forEach((itemService) => {
    const liServices = document.createElement("li");
    liServices.textContent = itemService;
    ulContentServices.appendChild(liServices);
  });
  div.setAttribute("class", "service");
  divContentPrice.setAttribute("class", "content-price");
  divContentTitle.setAttribute("class", "service-title");
  divContentButton.setAttribute("class", "content-button-cita");
  div.appendChild(divContentTitle);
  div.appendChild(ulContentServices);
  div.appendChild(divContentPrice);
  div.appendChild(divContentButton);
  divContentTitle.appendChild(titleService);
  divContentButton.appendChild(button);
  titleService.textContent = titleFormat;
  price.textContent = priceFormat;
  button.textContent = "Reserva tu cita";
  divContentPrice.appendChild(price);
  fragmentService.appendChild(div);
});

portfolioNode.appendChild(fragmentPortfolio);
testimonyNode.appendChild(fragmentTestimony);
serviceNode.appendChild(fragmentService);

window.addEventListener("load", (e) => {
  const hiddenData = document.querySelectorAll("#show-data");
  const photo = document.getElementById("rotate-photo");
  const header = document.getElementById("header-translate");
  const portfolio = document.querySelector(
    "#photos-show-portfolio:first-child"
  );

  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: header,
      start: "top 60%",
      end: "10% 30%",
      scrub: true,
      // markers: true
    },
  });

  const tlPhoto = gsap.timeline({
    scrollTrigger: {
      trigger: photo,
      start: "-=170 60%",
      end: "10% 50%",
      scrub: true,
      // markers: true
    },
  });
  const tlPhotoPortfolio = gsap.timeline({
    scrollTrigger: {
      trigger: portfolio,
      start: "-=100 top",
      end: "10% -=100",
      // scrub: true,
      // markers: true
    },
  });
  tlPhotoPortfolio.from(portfolio, {
    rotate: -35,
    yPercent: -150,
    duration: 0.5,
  });
  //animations////////////////////
  if (window.innerWidth > 768) {
    tlPhoto.to(photo, {
      rotate: 10,
      opacity: 1,
      duration: 1,
    });
    tlHeader.to(header, {
      yPercent: 300,
      opacity: 1,
      duration: 1,
    });
  }
  let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entrie) => {
      if (entrie.isIntersecting) {
        const imageSrc = entrie.target.dataset.src
        // divContentPri|ce.setAttribute("class", "content-price");

        entrie.target.setAttribute("src", imageSrc)
      }
    });
  }, options);
  Array.from(hiddenData).forEach((data) => observer.observe(data));
});

let open = false;

document.addEventListener("click", (e) => {
  open = !open;
  const menu = document.querySelector(".App-nav-links");
  const buttonNavTarget = e.target.closest(".content-button-nav");
  const buttonNavTargetOpen = document.querySelector(".open-icon");
  const buttonNavTargetClose = document.querySelector(".close-icon");

  if (buttonNavTarget) {
    if (open) {
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
