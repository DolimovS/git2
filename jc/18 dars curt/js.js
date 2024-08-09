  const createBtn = document.getElementById("create__btn")
  const modalWrapper = document.querySelector(".modal_wrapper")
  const formCreate = document.getElementById("form_creat")
  const formEdit = document.getElementById("form_edit")
  const closeBtn = document.getElementById("close_btn")
  const closeBtn1 = document.getElementById("close_btn1")
  const message = document.querySelector(".message")
  const create=document.querySelector(".create")
  const modalIdetWrapper=document.querySelector(".modal_idet_wrapper")

  createBtn.addEventListener("click", () => {
    modalWrapper.style.transform = "translateY(0)"
  })


  closeBtn.addEventListener("click", () => {
    modalWrapper.style.transform = "translateY(-100%)"
  })
  closeBtn1.addEventListener("click", () => {
    modalIdetWrapper.style.transform = "translateY(-100%)"
  })


  let todos = JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : []

    
    // if(todos.length) getData()
if(todos.length) getData()

  // malumot joylash 


  const setData = () => {
    localStorage.setItem('list', JSON.stringify(todos))
  }

 


  // malumot olish
  function getData() {
    const data = JSON.parse(localStorage.getItem("list"));
    console.log(data);
    create.innerHTML = ''
    data.forEach((item,index) => {
      create.innerHTML += `
        <tr>
        <td>${index+1}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.location}</td>
        <td>
        <button onclick="Updates(${index})" >Update</button>
        <button onclick="handelDelete(${index})">Delete</button>
        </td>
      </tr>
        `
    })
  }




  formCreate.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = formCreate.input_name.value.trim()
    const email = formCreate.input_email.value.trim()
    const phone = formCreate.input_phone.value.trim()
    const location = formCreate.input_location.value.trim()
    // console.log(name, email, phone, location);
    formCreate.reset()
    if (name.length) {
      todos.push({
        name: name,
        email: email,
        phone: phone,
        location: location,
    
      })
      setData()
      getData()
      modalWrapper.style.transform = "translateY(-100%)"
    } else {
      message.textContent = "Iltimos malumot kiriting ..."
      setTimeout(() => {
        message.textContent = ""
      }, 2000)
    }
    // console.log(todos);
  })

  function handelDelete(id){
    const filtered=todos.filter((item,i)=>{
      return id!==i;
    });

    todos=filtered;
    setData();
    getData(); 
  }



  // Update
  let editId;
  function Updates(){
    modalIdetWrapper.style.transform=" translateY(0)";
  }
  
  formEdit.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = formEdit.input_name.value.trim()
    const email = formEdit.input_email.value.trim()
    const phone = formEdit.input_phone.value.trim()
    const location = formEdit.input_location.value.trim()
    // console.log(name, email, phone, location);
    formEdit.reset()
    if (name.length) {
      todos.splice(editId,1,{
        name: name,
        email: email,
        phone: phone,
        location: location,
    
      })
      setData()
      getData()
      modalIdetWrapper.style.transform = "translateY(-100%)"
    } else {
      message.textContent = "Iltimos malumot kiriting ..."
      setTimeout(() => {
        message.textContent = ""
      }, 2000)
    }
    // console.log(todos);
  }) 

  function handelDelete(id){
    const filtered=todos.filter((item,i)=>{
      return id==i;
    });

    todos=filtered;
    setData();
    getData();
  }


