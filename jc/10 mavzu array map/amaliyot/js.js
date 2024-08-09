

const card = document.querySelector(".container");
const data = [
    {
        img: "./img/img1.png",
        nomi: "Процессоры",
    },
    {
        img: "./img/img2.png",
        nomi: "Ноутбуки",
    },
    {
        img: "./img/img3.png",
        nomi: "Системные блоки",
    },
    {
        img: "./img/img4.png",
        nomi: "Мониторы",
    },
    {
        img: "./img/img5.png",
        nomi: "Принтеры",
    },
    {
        img: "./img/img6.png",
        nomi: "МФУ",
    },
    {
        img: "./img/img7.png",
        nomi: "Видеокарты",
    },
    {
        img: "./img/img8.png",
        nomi: "Картриджи",
    },
    {
        img: "./img/img9.png",
        nomi: "Микрофоны",
    },
    {
        img: "./img/img10.png",
        nomi: "Компьютерная техника",
    },
]

data.map((item)=>{
   card.innerHTML +=`
   <div class="box">
   <img src="${item.img}">
   <p> ${item.nomi}</p>
   
   </div>

   ` ;
})
