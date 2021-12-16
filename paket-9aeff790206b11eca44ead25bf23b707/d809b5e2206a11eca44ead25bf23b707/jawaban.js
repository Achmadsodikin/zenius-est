var bilanganPrima = 0
for(var i = 1; i <= 2147; i++){
    var f = (i-1) + (i-2)
    if ( f <1147 || f % 3 == 0 || f % 5 == 0 || f % 7 == 0 ){
        continue;
    }else if(f >2147){
        break;
    }
   bilanganPrima += f % 1234567916544
}
console.log("hasil sigma a(n) untuk 1147<=n<=2147 adalah :",bilanganPrima);


// var bilanganPrima = 0
// for(var i = 1; i <= 2147; i++){
//     var f = (i-1) + (i-2)
//     if ( f <1147  ){
//         continue;
//     }else if(f >2147){
//         break;
//     }
//    bilanganPrima += f % 1234567916544
// }
// console.log("hasil sigma a(n) untuk 1147<=n<=2147 adalah :",bilanganPrima);