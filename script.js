const reviews = [
  {
    id: 1,
    name: "Ganesan N",
    job: "Graphic Designer",
    img: "./images/hariprasath.jpg",
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
    name: "Hariharan Y S",
    job: "web developer",
    img: "./images/hariprasath.jpg",
    text: "React Developer in Confluence Infotech Solutions,Enterepreneus, Seeking a Challenging position in a reputed organization where I can learn new skills.",
  },
  {
    id: 5,
    name: "Hariprasath Y S",
    job: "web developer",
    img: "./images/IMG_1204.JPG",
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


let currentItem = 0;


//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson()
})

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})

/*
If we use randow button
const randomBtn = document.getElementById('random-btn');
randomBtn.addEventListener('click', function(){
    const currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})


*/