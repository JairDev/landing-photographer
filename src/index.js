import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/main.scss";
import imagePortfolio1 from "../assets/photo1-port.png";
import imagePortfolio2 from "../assets/photo2-port.png";
import imagePortfolio3 from "../assets/photo3-port.png";
import imagePortfolio4 from "../assets/photo4-port.png";
import imagePortfolio5 from "../assets/photo5-port.png";
import imagePortfolio6 from "../assets/photo6-port.png";
import imagePortfolio7 from "../assets/photo7-port.png";
import paperCard from "../assets/card-paper.png";
import paperCardPortfolio from "../assets/name-label.png";

gsap.registerPlugin(ScrollTrigger);

const portfolioNode = document.querySelector(".App-portfolio-content-photos");
const testimonyNode = document.querySelector(".App-testimony-clients");
const serviceNode = document.querySelector(".App-service-content-services");

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
  divContentTitle.setAttribute("class", "portfolio-content-paper");
  title.textContent = photos.name;
  img.setAttribute("src", photos.src);
  img.setAttribute("alt", "Fotografía de una persona");
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
  const photo = document.getElementById("rotate-photo");
  const header = document.getElementById("header-translate");

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
      buttonNavTargetOpen.classList.add("close")
      buttonNavTargetClose.classList.add("open")
    }else {
      menu.classList.remove("open");
      buttonNavTargetOpen.classList.remove("close")
      buttonNavTargetClose.classList.remove("open")
    }
  }
});
