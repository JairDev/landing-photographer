import imagePortfolio1 from "./assets/photo1-port.png";
import imagePortfolio2 from "./assets/photo2-port.png";
import imagePortfolio3 from "./assets/photo3-port.png";
import imagePortfolio4 from "./assets/photo4-port.png";
import imagePortfolio5 from "./assets/photo5-port.png";
import imagePortfolio6 from "./assets/photo6-port.png";
import imagePortfolio7 from "./assets/photo7-port.png";
import paperCard from "./assets/card-paper.png";

export const dataPortfolio = [
  { name: "Abigail", src: imagePortfolio1 },
  { name: "Antonio", src: imagePortfolio2 },
  { name: "Manuel y Jose", src: imagePortfolio3 },
  { name: "Patricia", src: imagePortfolio4 },
  { name: "Carolina", src: imagePortfolio5 },
  { name: "Andres", src: imagePortfolio6 },
  { name: "Grecia", src: imagePortfolio7 },
];

export const dataTestimony = [
  {
    name: "Arquette",
    testimony:
      "Excelente profesional, me sentí a gusto trabajando con el.",
    src: paperCard,
  },
  {
    name: "Daniel",
    testimony:
      "Recomendado al 100%, muy tratable y profesional.",
    src: paperCard,
  },
  {
    name: "Nairobi",
    testimony:
      "Me encantó trabajar con el, es como si lo conociera de toda la vida.",
    src: paperCard,
  },
];

export const dataService = [
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
      dvd: "1 DVD de 80 fotos digitales",
      sesion: "3 hora de sesión fotográfica",
      vestuario: "5 cambios de vestuario",
      fotos: "10 fotos impresas",
    },
    price: 80,
  },
];