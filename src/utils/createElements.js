import { dataPortfolio, dataService, dataTestimony } from "../data";

const portfolioNode = document.querySelector(".App-portfolio-content-photos");
const testimonyNode = document.querySelector(".App-testimony-clients");
const serviceNode = document.querySelector(".App-service-content-services");

const fragmentTestimony = document.createDocumentFragment();
const fragmentService = document.createDocumentFragment();
const fragmentPortfolio = document.createDocumentFragment();

export function createPortfolioElements() {
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
    img.setAttribute("data-defaultsrc", "./assets/placeholder-image.jpg")
    img.setAttribute("data-src", photos.src);
    img.setAttribute("alt", "Fotografía de una persona o personas");
    img.setAttribute("id", "show-data");
    div.appendChild(img);
    div.appendChild(divContentTitle);
    divContentTitle.appendChild(title);
    fragmentPortfolio.appendChild(div);
  });
  portfolioNode.appendChild(fragmentPortfolio);
}

export function createTestimonyElements() {
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
  testimonyNode.appendChild(fragmentTestimony);
}

export function createServiceElements() {
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
  serviceNode.appendChild(fragmentService);
}


// function createElement(type, arrayAttr) {
//   const element = document.createElement(type)
//   arrayAttr.forEach(attr => {
//     element.setAttribute(attr.name, attr.value)
//   }) 
//   return element
// }

// const arr = [
//   {
//     "name": "src",
//     "value": "path"
//   },
//   {
//     "name": "alt",
//     "value": "imagen"
//   }
// ]

// const nDiv = createElement("div", arr)
// console.log(nDiv)