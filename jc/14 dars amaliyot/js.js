let center=document.querySelector(".center")
let bottom=document.querySelector(".bottom")
const cards=[
    {
        img:"./img/img1.jpg",
        name: "Xiaomi Redmi Note 13",
        summa:3300000,
    },
    {
        img:"./img/img2.jpg",
        name: "Samsung Galaxy A05s",
        summa:1569000,
    },
    {
        img:"./img/img3.jpg",
        name: " Itel A70",
        summa:999000,
    },
    {
        img:"./img/img4.jpg",
        name: "Xiaomi Redmi 13C",
        summa:1599000,
    },
    {
        img:"./img/img5.jpg",
        name: " Infinix Smart 8",
        summa:1158000 ,
    },
    {
        img:"./img/img1.jpg",
        name: "Xiaomi Redmi Note 13",
        summa:3300000,
    },
    {
        img:"./img/img2.jpg",
        name: "Samsung Galaxy A05s",
        summa:1569000,
    },
    {
        img:"./img/img3.jpg",
        name: " Itel A70",
        summa:999000,
    },
    {
        img:"./img/img4.jpg",
        name: "Xiaomi Redmi 13C",
        summa:1599000,
    },
    {
        img:"./img/img5.jpg",
        name: " Infinix Smart 8",
        summa:1158000 ,
    },
    
    
]

let jami=0;
cards.map((item)=>{
    center.innerHTML +=`
    <div class="card">
    <img src="${item.img}" >
    <p class="name">Nomi:${item.name}</p>
    <p class="summa name">Summa:${item.summa}</p>
    </div>
    `
    jami=jami+item.summa;
});
 



bottom.innerHTML=`
<button>
<p>Jami:${jami} sum</p>
</button>
`








