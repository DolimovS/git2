const API= "https://restcountries.com/v3.1/all";

fetch(API)
.then((data) =>{
    const res=data.json();
    return res;
})
.then((resJson )=>{
    console.log(resJson);
})
.catch((err)=>{
    console.log(err);
})

// async & await

const getData=async ()=>{
    const data=await fetch(API)
    const res=await data.json()
    console.log(res);
    return res;
};
getData()
.then(()=>{

})
.catch(()=>{

})






// 
const API1="./data/data.jsonn"

// fetch(API1)
// .then((data)=>{
//     const res1=data.json();
//     return res1;
// })
// .then((data1)=>{
//     console.log(data1);
// })



// async & await

const getData2= async ()=>{
    const data=await fetch(API1)
    const res2= await data.json()
    // console.log(res2)
    return res2;
};


getData2()
.then((data)=>{
   console.log(data);
})
.catch((arr)=>{
   console.log(arr);
})