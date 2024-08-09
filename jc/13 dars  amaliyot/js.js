


const shoppings = [
    {
        img: "./img1.png",
        name: "NIKE",
        price: "85$",
        title: "Lorem ipsum dolor sit amet."
    },
    {
        img: "./img1.png",
        name: "ADIDAS",
        price: "25$" ,
        title: "Lorem ipsum dolor sit amet."
    },
    {
        img: "./img1.png",
        name: "PUMA",
        price: "95$" ,
        title: "Lorem ipsum dolor sit amet."
    },
    {
        img: "./img1.png",
        name: "REEBOK",
        price: "67$" ,
        title: "Lorem ipsum dolor sit amet."
    }
];

const btn = document.querySelector("#btn");
const card = document.querySelector(".card")

btn.addEventListener("click", function() {
    shoppings.map((item) => {
        return (
            card.innerHTML += `
            <div class="card_info">
            <img src="${item.img}" alt="">
             <h1>${item.name}</h1>
             <p>${item.price}</p>
            </div>
            `

        )
    })
} )




















































// let wrapper = document.querySelector(".wrapper")
// let top=document.querySelector(".top")

// const card = [
//     {
//         img: "./img1.png",
//         name: "NIKE",
//         plice: "100$",
//         title: " Lorem ipsum dolor sit amet.",
//     },
//     {
//         img: "./img1.png",
//         name: "NIKE",
//         plice: "100$",
//         title: " Lorem ipsum dolor sit amet.",
//     },
//     {
//         img: "./img1.png",
//         name: "NIKE",
//         plice: "100$",
//         title: " Lorem ipsum dolor sit amet.",
//     },
//     {
//         img: "./img1.png",
//         name: "NIKE",
//         plice: "100$",
//         title: " Lorem ipsum dolor sit amet.",
//     },
// ]

// card.map((item) => {
//     return(
//     top.innerHTML += `
    
   
//     <div class="card1">
//       <img src="${item.img}" >
//       <p class="name">${item.name}</p>
//       <p class="plice">${item.plice} </p>
//       <div class="title">${item.title}</div>
//     </div>

//     `)
// });


