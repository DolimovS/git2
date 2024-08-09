

const container=document.querySelector(".container")

// getData
const getData=()=>{
    return new Promise((resolve, reject) =>{
        
        const malumot=new XMLHttpRequest()
        malumot.addEventListener("readystatechange",()=>{
            if(malumot.readyState===4 && malumot.status===200){
                let data=JSON.parse(malumot.responseText)
                resolve(data.results);                
            }
            else if (malumot.readyState === 4){
                reject("Malunotni olishni iloji bo'lmadi");
            }
        })
            //malumot olish
    malumot.open("GET","https://randomuser.me/api/?results=100");
    
    //malumot jonatish
    
    malumot.send()

    });


}

// getData ni chaqirish

getData()
.then((data)=>{
    console.log(data)
    data.forEach((item) => {

        console.log(item);
        container.innerHTML +=`
        <div class="card">
        <img src="${item.picture.large}" alt="">
        <h3>${item.name.first}</h3>
        <p>Email:${item.email}</p>
        <p>Password:${item.login.password}</p>
        <p>Phone:${item.cell}</p>
        <p>Location:${item.location.city}</p>
        <button onclick="">Delete</button>
        </div>
        `
        
        
    });
})
.catch((err)=>{
    console.log(err)
})





// const data=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve("true")
//         reject("folse")
//     });


//     data()
//     .then((salom)=>{
//         console.log(salom);
//     })
//     .catch((xato)=>{
//         console.log(xato);
//     });
// }