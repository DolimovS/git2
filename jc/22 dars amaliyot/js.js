const tbody=document.querySelector("tbody")
const modalWrapper=document.querySelector(".modal_wrapper")
const sectoin1=document.querySelector("#section_1")
const kirish=document.querySelector(".kirish")

let list=[];
const API="https://restcountries.com/v3.1/all";
// console.log(API);
fetch(API)
.then((data)=>{
    loading(true)
    const res=data.json();
    return res;
})
.then((newdata)=>{
    loading(false)
    list=newdata;
    newdata.forEach((item,index) => {
        tbody.innerHTML +=`
       <tr class="newName">
           <td class="img"><img src="${item.flags.svg}" alt=""></td>
           <td>${item.name.common}</td>
           <td>${item.capital}</td>
           <td class="maydon">${item.area}</td>
           <td class="maydon">${item.population}</td>
           <td>${item.continents}</td>
           <td class="tbody_button">
               <button onclick="updates(${index})" class="update">Update</button>
               <button  class="delete">Delete</button>
           </td>
       </tr
       ` 
    });
})
    



document.addEventListener("click",(e)=>{
    if(e.target.classList=="delete"){
        e.target.parentElement.parentElement.remove()
    }
})


function updates(id){
    modalWrapper.classList.remove("hidden")
    sectoin1.classList.add("hidden");
     const country=list[id];
     modalWrapper.innerHTML +=`
        <div class=" container modal">
            <img src="${country.flags.svg}" alt="">
            <div class="modal_card">
                    <h1>Name:${country.name.common}</h1>
                    <h1>Capital:${country.capital}</h1>
                    <h1>Area:${country.area}</h1>
                    <h1>Population:${country.population}</h1>
                    <h1>Continents:${country.continents}</h1>
            </div>
        </div>
     `

}



function  loading(state){
    if(state){
     kirish.style.display="block"
    }
    else{
    
        kirish.style.display="none"
    }
}