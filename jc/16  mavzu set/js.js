// //ternary operatori

// const internet=true;

// // if(internet){
// //     console.log("start");
// // }
// // else{
// //     console.log("stop");
// // }

// internet
// ?  console.log("start")
// :  console.log("stop");


// //distrakcha

// const arr=["bir","ikki","uch"]

// const [bir ,ikki,uch]=["bir","ikki","uch"]

// console.log(bir);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// rest operatori
//const [bir ,...ikkiuch]=["bir","ikki","uch"]

// console.log(bir,ikkiuch);

//objectlar

// const obj={
//     name:"samandar",
//     age:19,
//     job:"frontend",
// }

// const {ism, age,job}=obj

// console.log(ism);

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.job);



//setTimeout

// setTimeout( ()=>{
//     console.log("hello");
// } ,3000)  //3000=3s ga  natija 3s dan keyin ekranga chiqadi

// let count=0
// const timeIntr=setInterval(()=>{
//     console.log(count++);
//     if(count==10){
//         console.log("hello")
//         count.push(count=0)
//         clearInterval(timeIntr)
//     }
// },1000)





///amaliyot


const span1 = document.querySelector(".span");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop")

counter = 0
const startIntervel = () => {
    const setInter = setInterval(() => {
        counter++
        span1.textContent = counter
        span1.style.color = "black"
        span1.style.color = "black"
        span1.style.backgroundColor = "white "
        span1.style.transition="0.3s";
        stop.addEventListener("click", () => {
            clearInterval(setInter)
            span1.style.color = "white"
            span1.style.backgroundColor = "black"
        })
    }, 1000)
}





