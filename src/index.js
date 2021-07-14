import "./styles/main.scss";
import imagePortfolio1 from "../assets/photo1-port.png";
import imagePortfolio2 from "../assets/photo2-port.png";
import imagePortfolio3 from "../assets/photo3-port.png";
import imagePortfolio4 from "../assets/photo4-port.png";
import imagePortfolio5 from "../assets/photo5-port.png";
import imagePortfolio6 from "../assets/photo6-port.png";
import imagePortfolio7 from "../assets/photo7-port.png";
import paperCard from "../assets/card-paper.png"

const portfolioNode = document.querySelector(".App-portfolio-content-photos");
const testimonyNode = document.querySelector(".App-testimony-clients")
const serviceNode = document.querySelector(".App-service-content-services")

const dataPortfolio = [
  imagePortfolio1,
  imagePortfolio2,
  imagePortfolio3,
  imagePortfolio4,
  imagePortfolio5,
  imagePortfolio6,
  imagePortfolio7
];

const dataTestimony = [
  {"name": "Arquette Duen", "testimony": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s", "src": paperCard},
  {"name": "Kialsd Sths", "testimony": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s", "src": paperCard},
  {"name": "Kierñ Lekjr", "testimony": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s", "src": paperCard}
]

const dataService = [
  {
    title: "paquete",
    services: {
      dvd: "1 DVD de 30 fotos digitales",
      sesion: "1 hora de sesión fotográfica",
      vestuario: "2 cambios de vestuario",
      fotos: "3 fotos impresas"
    },
    price: 50
  },
  {
    title: "paquete",
    services: {
      dvd: "1 DVD de 30 fotos digitales",
      sesion: "1 hora de sesión fotográfica",
      vestuario: "2 cambios de vestuario",
      fotos: "3 fotos impresas"
    },
    price: 80
  }
]

const fragmentPortfolio = document.createDocumentFragment();
const fragmentTestimony = document.createDocumentFragment();
const fragmentService = document.createDocumentFragment();

dataPortfolio.forEach((photos) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.setAttribute("class", "portfolio-content-photos")
  img.setAttribute("src", photos);
  img.setAttribute("alt", "Fotografía de una persona");
  div.appendChild(img);
  fragmentPortfolio.appendChild(div);
});

dataTestimony.forEach(testimony => {
  const div = document.createElement("div");
  const divContentTestimony = document.createElement("div");
  const testimonyText = document.createElement("p");
  const nameClient = document.createElement("h4");
  div.setAttribute("class", "testimony")
  div.appendChild(nameClient)
  div.appendChild(divContentTestimony)
  divContentTestimony.setAttribute("class", "testimony-content-testimony")
  divContentTestimony.appendChild(testimonyText)
  testimonyText.textContent = testimony.testimony  
  nameClient.textContent = testimony.name
  fragmentTestimony.appendChild(div);
})

dataService.forEach((service) => {
  const div = document.createElement("div");
  const divContentTitle = document.createElement("div");
  const ulContentServices = document.createElement("ul");
  const titleService = document.createElement("h4");
  Object.values(service.services).forEach((itemService) => {
    const liServices = document.createElement("li")
    liServices.textContent = itemService
    ulContentServices.appendChild(liServices)
  })
  div.setAttribute("class", "service")
  divContentTitle.setAttribute("class", "service-title")
  div.appendChild(divContentTitle)
  div.appendChild(ulContentServices)
  divContentTitle.appendChild(titleService)
  titleService.textContent = service.title
  fragmentService.appendChild(div);
})

portfolioNode.appendChild(fragmentPortfolio);
testimonyNode.appendChild(fragmentTestimony);
serviceNode.appendChild(fragmentService);
