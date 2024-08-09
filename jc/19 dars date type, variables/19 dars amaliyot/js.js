let malumot=new XMLHttpRequest()
const container=document.querySelector(".container")


malumot.addEventListener("readystatechange",()=>{
    // console.log(malumot);

    if(malumot.readyState===4 && malumot.status===200){
        const data=JSON.parse(malumot.responseText).results;
        data.forEach((item) => {
            container.innerHTML +=`
            <div class="card">
            <img src="${item.picture.large}" alt="">
            <h3>${item.name.first}</h3>
            <p>Email:${item.email}</p>
            <p>Phone:${item.phone}</p>
            <p>Location:${item.location.city}</p>
            </div>
            `
            
        })
        
    }
})

//malumot olish
malumot.open("GET","https://randomuser.me/api/?results=10");

//malumot jonatish

malumot.send();