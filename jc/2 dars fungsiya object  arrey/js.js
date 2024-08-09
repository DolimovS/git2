//fungtion
//object
//arrey
//prompt
//confirm
//alert
//if else


//object



// const data ={
//     ism:"samandar",
//     yosh:19
// }

// data.yosh=20
//  console.log(data.yosh);



 //arrey

//  const data=["olma","behi","banan","olcha",{ism:"samandar yosh 19"},"nok"]
//   console.log(data[4]);
 


        // fungtion
     //funktion decleration  {fungsiyani elon qilish}
 // fungsiyani elon qilishda fungsiya nomi bilan elon qilinadi  va kodda istalgan joyda chaqirilishi mumkin 
 //fungsiya elon qilish kotarish {hoisting} hususiyatiga ega  yana fungsiya chaqirilishdan ham oldin ishlaydi 
     

     //   fungsiyani elon qilish

//    function greet(){                  //greet fungsiya nomi
//    console.log("salom dunyo");
//   }
  
 //fungsiyani chaqirish 
 //  greet();  /salom dunyo

    //funktion expresssoin    {funsiyani ifodalash}

// fungsiyani ifodalashda fungsiya ozgaruvchilarni tanimaydi fungsiya ifodalash chaqirilishdan oldin mavjud bolmaydi 
// yani kotarish {hoisting} qilinmaydi

  //fungsiyani ifodalash

//   const greet= function(){
//   console.log("salom dunyo");
//   };

  //fungsiyani chaqirish
// greet();   /salom dunyo

  //farqlari
//1. hoisting :fungsiya elon qilishda hoisting qilinadi yani fungsiya chaqirilishdan oldin mavjud boladi
//  fungsiya ifodalash esa hoisting qilinmaydi    


  //kopaytma
// function kopaytma(a,b){
//     return a*b
// }
// console.log("kopaytma="+kopaytma(12,45))
//    //yigindi
// function yigindi(a,b){
//     return a+b
// }
// console.log("yigindi="+yigindi(12,45))
//    //ayirma
// function ayirma(a,b){
//     return a-b
// }
// console.log("ayirma="+ayirma(12,45))
//    //bolish
// function bolish(a,b){
//     return a/b
// }
// console.log("bolinma="+bolish(12,45))



  // prompt
//    const ism=prompt("ismingizni kiriting")
//    function kopaytma(){
//     return "assalomu alaykum:"+ism
//    }
// console.log(kopaytma());


const a= confirm("siz rostdan ham malimotlarni ochirmoqchimisiz")


if(a===true){
    console.log("malumot ochirildi");
}
else{
    console.log("malumot ochirilmadi");

}

alert("salom")