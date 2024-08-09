// const text=document.querySelector("p")


// text.textContent="hayir"

// text.style.color="red"


// const data=document.querySelector('input')

// data.addEventListener('input',function(e){
//     console.log((e.target.value));
// })


// const plus=document.querySelector('button')
// const box=document.querySelector('.box')


// plus.addEventListener('click',function() {
//     box.style.display="block"
    
// })

const red=document.querySelector('.red')
const box_1=document.querySelector('.box_1')


red.addEventListener('click',function(){
    box_1.style.backgroundColor="red"
})


const yellow=document.querySelector('.yellow')
const box_2=document.querySelector('.box_2')

yellow.addEventListener('click',function(){
    box_2.style.backgroundColor="yellow"
})



const green=document.querySelector('.green')
const box_3=document.querySelector('.box_3')

green.addEventListener('click',function(){
    box_3.style.backgroundColor="green"
})