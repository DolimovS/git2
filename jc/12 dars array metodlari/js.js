//   let ism=["samandar","azizbek","dostonbek"]   

//   // forEach

//   ism.forEach((item)=>{
//     console.log(item);
//   }) 

//   //map

//   let name=ism.map((item)=>{
//     return item+"bek"
//   })

//   console.log(name);


// //   let nums=[1,2,3,4,5,4,5,55,9]


// //   forEach

// nums.forEach((item)=>{
//     console.log(item*2);
// })


// //map


// let number=nums.map((item)=>{
//     return item*2
// })


// console.log(number);

//sort

// let nums=[1,2,3,4,5,4,5,55,9]

// let num1=nums.sort((a,b)=>{
//     return b-a
// })

// // filter
// let nums2=nums.filter((item)=>{
//     return item > 10
// })

// console.log(nums2);



// let ism=["samandar","azizbek","dostonbek"]   
// console.log(ism.reverse());
// console.log(ism.join(' '));
// console.log(ism.at(-1));


// let nums =[1,2,3,4,-2,3,-4]

// let count=0 
//  nums.forEach((item)=>{
//     if(item>0){
//     count +=item
//     }
//  })


//  console.log(count)


// let nums =[1,2,3,4,-2,3,-4]
// let num=nums.reduce((item,index,Array)=>{
//     return item*index
// },1)
// //kopaytirish kk bolsa 1 qoshish kk bolsa 0 qoyiladi
// console.log(num);


// let ism=["samandar","azizbek","dostonbek"]  

// let ism1=ism.map((item)=>{
//     return item.split("").reverse().join("")
// })


// console.log(ism1);

// let num = [1, 2, 3, 4, 1, 0, 0, 4]
// let nums = [1, 2, 3, 4, 14, 4, 5, 4, 12, 32]
// let nums2 = [1, 2, 3, 4]
 
// let son=num.slice(-1)


// let son4=num.slice(0,1)
// console.log(son4);
 

// let nul=nums2.join('')
// console.log(Number(nul));


const student=[
  {
    id:1,
    name:"samandar",
    age:19,
    job:"Frontend",
    from:"Uzbekiston"

  },
  {
    id:1,
    name:"samandar",
    age:17,
    job:"Frontend",
    from:"USA"

  },
  {
    id:1,
    name:"samandar",
    age:18,
    job:"Frontend",
    from:"Xitoy"

  },
  {
    id:1,
    name:"samandar",
    age:25,
    job:"Frontend",
    from:"Rossia"

  },
  {
    id:1,
    name:"samandar",
    age:24,
    job:"Frontend",
    from:"USA"

  },
  {
    id:1,
    name:"samandar",
    age:34,
    job:"Frontend",
    from:"Korea"

  },

]

console.log(student);

let FilterStudend=student.filter((item)=>{
    return item.age>20
})
let sortStudent=student.sort((a,b)=>{
      return  a.age-b.age
})

console.log(sortStudent);


console.log(FilterStudend);