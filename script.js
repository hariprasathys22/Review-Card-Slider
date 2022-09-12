const reviews = [
  {
    id: 1,
    name: "Ganesan N",
    job: "Graphic Designer",
    img: "./images/IMG_1204.JPG",
    text: "Graphic Designer in Confluence Infotech Solutions,Enterepreneus, Seeking a Challenging position in a reputed organization where I can learn new skills.",
  },
  {
    id: 2,
    name: "Laith Mujibar Rahman",
    job: "Phote Editor",
    img: "./images/hariprasath.jpg",
    text: "Photo Editor in Confluence Infotech Solutions,Enterepreneus, Seeking a Challenging position in a reputed organization where I can learn new skills.",
  },
  {
    id: 3,
    name: "Kaviyan P",
    job: "web developer",
    img: "./images/hariprasath.jpg",
    text: "Front end developer in Confluence Infotech Solutions,Enterepreneus, Seeking a Challenging position in a reputed organization where I can learn new skills.",
  },
  {
    id: 4,
    name: "Hariharan",
    job: "web developer",
    img: "./images/hariprasath.jpg",
    text: "React Developer in Confluence Infotech Solutions,Enterepreneus, Seeking a Challenging position in a reputed organization where I can learn new skills.",
  },
  {
    id: 5,
    name: "Sathish",
    job: "web developer",
    img: "./images/hariprasath.jpg",
    text: "Mern Stack Developer in Confluence Infotech Solutions,Enterepreneus, Seeking a Challenging position in a reputed organization where I can learn new skills.",
  },

];


// Select Items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let currentItem =1;


//load initial item
window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[currentItem];
    img.src = item.img;

})