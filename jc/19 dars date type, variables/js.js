// //http request, API

// // const request=new XMLHttpRequest();

// // console.log(request);

// // request.addEventListener("readystatechange", ()=>{
// //    console.log(request.responseText);
// // })

// // // open

// // request.open("GET","https://jsonplaceholder.typicode.com/todos/");

// // // send

// // request.send();

// // 1 - sorov yuborildi

// // 2 - sorov olindi

// // 3 - sorov yuklanayapdi..

// // 4 - sorov keldi



// // malumot  
// const card=document.querySelector(".card")


// const malumot=new XMLHttpRequest();

// malumot.addEventListener("readystatechange",()=>{
//    if(malumot.readyState===4 && malumot.status===200){
//     let data=JSON.parse(malumot.responseText)
//     console.log(data);

//     data.forEach((item)=>{
//         card.innerHTML+=`
        
//     <ul>
//     <li>${item.name}</li>
//     <li>${item.age}</li>
//     <li>${item.adress}</li>
//     <li>${item.number}</li>
//     <li>${item.email}</li>
//     <li>${item.password}</li>
//     <li>${item.job}</li>
//     <li>${item.oqish_joyi}</li>

// </ul>
//         `
//     })    



            
//    }
//    else if(malumot.readyState===4){
//     console.log("Malumotni olishni iloji bolmadi");
//    }
// })

// // open

// malumot.open("GET","./data/data.json");

// // send

// malumot.send();



let newMalumot=new XMLHttpRequest();
const card=document.querySelector(".card")

newMalumot.addEventListener("readystatechange",()=>{

    if(newMalumot.readyState===4 && newMalumot.status===200){
        let data=JSON.parse(newMalumot.responseText)
        data.forEach((item)=> {
            card.innerHTML +=`
            <ul>
            <li>${item.name}</li>
            <li>${item.username}</li>
            <li>${item.email}</li>
            <li>${item.address.city}</li>
            <li>${item.phone}</li>
            <li>${item.company.name}</li>
          </ul>
            `
        });
    }


})



// open
newMalumot.open("GET","https://jsonplaceholder.typicode.com/users/")

// send

newMalumot.send();