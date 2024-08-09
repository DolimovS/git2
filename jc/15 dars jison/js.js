// //JSON

// const data={
//     ism:"samandar",
//     yosh:19,
//     email:"samandardolimov71@gmail.com",
//     tel:976860908,

// }


// //sent


// //object formatni json farmatga ogirish


// console.log(data);


// const jsondata=JSON.stringify(data)

// console.log(jsondata);

// const objectdata=JSON.parse(jsondata)

// console.log(objectdata);


// function senddata() {
//     const datainput = document.querySelector("#datainput");

//     const getdata = datainput.value;

//     const jsondata = JSON.stringify(getdata);

//     console.log(jsondata);
// }

const myform=document.querySelector("#myform")


myform.addEventListener('submit',(event)=>{
    event.preventDefault()

    const newarrey=[]


    const ism =event.target[0].value
    const familiya =event.target[1].value
    const number =event.target[2].value
    const  email =event.target[3].value
    const password =event.target[4].value



    const data={
        ism,
        familiya,
        number:number,
        email,
        password,
        
    };

    newarrey.push(data);

    const jsonArrey=JSON.stringify(newarrey);
    console.log(newarrey);

    console.log(jsonArrey);

    // newarrey.push(ism,familiya,number,email,pasword);
  
    // const jsonArrey=JSON.stringify(newarrey);
    // console.log(newarrey);
    // console.log(jsonArrey);
});

