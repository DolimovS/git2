// /// ==========================================================================================================================
// /// Masala- 1
// // Sharti...
// ///   Berilgan uchta int qiymati, a b c, eng kattasini qaytaring.
// function intMax(a, b, c) {
//  if(a>b && a>c){
//     console.log(a);
//  }
//  else if (b>a && b>c){
//     console.log(b);
//  }
//  else{
//     console.log(c);
//  }
// }

// // intMax(2,4,6);

// intMax(1, 5, 3);
/// Masala- 2
// Sharti...
///   Agar berilgan satrda 1 va 3 ta "e" belgilar bo'lsa, true qiymatini qaytaring.
// function stringE(str) {
//     let count=0;
//  for(let i=0; i<str.length;i++){
//     if(str[i]=="e"){
//         count++;
//     }
//  }
//  if (count===1 || count===3){
//     console.log(true);
//  }
//  else {
//     console.log(false);
//  }


// }
// stringE("Hello"); // true
// stringE("Heeello"); // false
// /// Masala- 3
// Sharti...
//    Satr berilgan bo'lsa, oxirgi 3 ta belgi katta harf bilan yozilgan yangi qatorni qaytaring. Agar satrda 3 tadan kam belgi bo'lsa, unda nima bo'lsa katta harf bilan yozing. Esda tutingki, str.toUpperCase() satrning katta harfli versiyasini qaytaradi.
function endUp(str) {


    // if(str.length>3){
    //   let str1= str.slice(-3).
    // }


}
endUp("Hello"); /// => HeLLO
/// Masala- 4
// Sharti...
///    Bo'sh bo'lmagan satr va int n berilgan bo'lsa, n indeksidagi belgi o'chirilgan yangi qatorni qaytaring.
function missingChar(str, n) {
    const str1=str.slice(0,n)+str.slice((n+1))
    console.log(str1);
}
missingChar("kitten", 1); // => ktten

/// Masala- 5
// Sharti...
//   Str berilgan bo'lsa boshi va oxiridagi belgilarini olib bitta arrayga solib bering, agar str length bir yoki noll bo'lsa str o'zini qaytaring...
let newArr=[];

function startEndChar(str) {
  
    if(str.length>2){
        let new1=str.slice(0,1);
        let new2=str.slice(-1);
        newArr.push(new1,new2)
    }

    else{
        newArr.push(str)
    }
}
console.log(newArr);
startEndChar("Salom"); // => ["S","m"]
// /// Masala- 6
// // Sharti...
// //   Ikki int qiymat berilgan bo'lsa, ularning yig'indisini qaytaring. Ikki qiymat bir xil bo'lmasa, ularning yig'indisini ikki baravar qaytaring.
function sumDouble(a, b) {
   if(a===b){
    console.log(2*(a+b));
   }
   else{
    console.log(a+b);
   }

}
sumDouble(1, 2); // => 3
sumDouble(2, 2); // => 8