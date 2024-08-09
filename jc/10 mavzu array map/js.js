
const box=document.querySelector(".box_macbook");



const data=[

    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },
    {
        img:"./macbook.png",
        narxi:2000,
        soni:20,
        rangi:"sery",
        yili:2020,
    },
    {
        img:"./macbook.png",
        narxi:3000,
        soni:10,
        rangi:"oq",
        yili:2022,
    },

    
 
]


data.map((item)=>{
    box.innerHTML +=`
    <div class="card">
    <img src="${item.img}"
    <p> ${item.narxi}</p>
    <p> ${item.rangi}</p>
    <p> ${item.soni}</p>
    <p> ${item.yili}</p>
    
    </div>
    `;
})