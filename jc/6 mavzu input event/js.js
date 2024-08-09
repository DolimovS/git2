//shart operatorlari



//1.shart operatori if ,else, else if

// let a=5
// if(a>5){
//     alert('xa togri')
// }


// const a=prompt('yoshingizni kiriting')

// if(a>'15'){
//     alert('xush kelibsiz')
// }

// 6 dan 11  haryli tong

// 11 dan 18 gacha haryli tong  
//18 dan 22 gacha haryli kech 

// let a=prompt('soatni kiriting')

// if(a>=0){
//      if( a>=1 && a<6){
//         alert('kechirasiz xali tong otmadi')
//     }
//      else if(  a>=6 && a<=11){
//         alert('haryli tong')
//     }
//     else if( a>11 && a<=18){
//         alert('haryli kun')
//     }
//     else if( a>18 && a<=22){
//         alert('haryli kech')
//     }
//     else if( a>22 && a<=24){
//         alert('haryli tun')
//     }
//     else if(a>24){
//         alert('kechirasiz!!! 1 kun 24 soatni tashkil etadi.')
//     }

//     else{
//        alert('kechirasiz son kiritmadinggiz !!!')

//     }
// }
// else(
//     alert("kechirasiz minus sonlar qabul qilinmaydi")
// )


//////   switch case

// let a = 'hello'
// switch ('salom') {
//     case 'hayir':
//         console.log('1-parta')
//         break;
//     case 'hayir':
//         console.log('2-parta')
//         break;
//     case 'hayir':
//         console.log('3-parta')
//         break;
//     case 'hayir':
//         console.log('4-parta')
//         break;
//     case 'salom':
//         console.log('5-parta')
//         break;
//     case 'hayir':
//         console.log('6-parta')
//         break;
//     default:
//         console.log('javobni hach qaysi parta topa olmadi')
// }

let a = prompt('hafta raqamini  kiriting')

switch (a) {
    case '1':
        console.log("dushanba");
        break;
    case '2':
        console.log("seshanba");
        break;
    case '3':
        console.log("chorchanba");
        break;
    case '4':
        console.log("payshanba");
        break;
    case '5':
        console.log("juma");
        break;
    case '6':
        console.log("shanba");
        break;
    case '7':
        console.log("yakshanba");
        break;
        default:
            console.log(' 7 gacha raqamlarni kiritish mumkin');
}




//// mantiqiy operatorlar  !, ||, &&