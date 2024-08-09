const navPlus=document.querySelector(".nav_plus")
const modalWrapper=document.querySelector(".modal_wrapper")
const exitIcon=document.querySelector(".fa-xmark")
const formCreat=document.querySelector(".form_creat")
const messege=document.querySelector(".messege")
const creat=document.querySelector(".creat")
const modalEditWrapper=document.querySelector(".modal_edit_wrapper")
const formEditCreat=document.querySelector(".form_edit_creat")

navPlus.addEventListener(("click"),()=>{
    modalWrapper.style.transform="translateY(0)"
})

function modalExit(){
    modalWrapper.style.transform="translateY(-100%)"
}
function modalEditExit(){
    modalEditWrapper.style.transform="translateY(-100%)"
}



let todos=JSON.parse(localStorage.getItem("list"))
?JSON.parse(localStorage.getItem("list"))
:[]
console.log(todos);
if (todos.length) getData()


const setDate=()=>{
    localStorage.setItem("list",JSON.stringify(todos))
}


// getdeta
function getData(){
    let data=JSON.parse(localStorage.getItem("list"))
    console.log(data);
    creat.innerHTML=''
    data.forEach((item,index)=>{
        creat.innerHTML+=`
        <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.address}</td>
        <td>${item.number}</td>
        <td>
        <button onclick="Update(${index})"><i class="fa-sharp fa-solid fa-pen"></i></button>
        <button onclick="deletes(${index})" ><i class="fa-solid fa-trash "></i></button>
        </td>
        </tr>
        `
    })

    
}


formCreat.addEventListener("submit",(e)=>{
    e.preventDefault()
   const name=formCreat.input_name.value.trim()
   const email=formCreat.input_email.value.trim()
   const address=formCreat.input_address.value.trim()
   const number=formCreat.input_number.value.trim()
    formCreat.reset()
   if(name.length){
    todos.push({
      name:name,
      email:email,
      address:address,
      number:number,
    })
    setDate()
    // console  .log(todos);
    getData()
    modalWrapper.style.transform="translateY(-100%)"
   }
   else{
    messege.textContent="Iltimos malumotlarni kitriting"
    setTimeout(()=>{
        messege.textContent= ''
    },2500)
   }
})


// delete
function deletes(id){
    const filtered=todos.filter((item,index)=>{
        return id!==index;
    });
         todos=filtered;
  setDate();
  getData();
}

//Update

let idetId

function Update(){
    modalEditWrapper.style.transform="translateY(0)"
}

formEditCreat.addEventListener("submit",(e)=>{
    e.preventDefault
    const name=formEditCreat.input_name.value.trim()
    const email=formEditCreat.input_email.value.trim()
    const address=formEditCreat.input_address.value.trim()
    const number=formEditCreat.input_number.value.trim()
    formEditCreat.reset()
    if(name.length){
        todos.splice(idetId,1,{
           name:name,
           email:email,
           address:address,
           number:number,
        })
        setDate()
        getData()
        modalEditWrapper.style.transform="translateY(-100%)"
    }
    else{
        messege.textContent="Iltimos malumotlarni kiriting"
        setTimeout(()=>{
            messege=""
        },2000)
    }

})

