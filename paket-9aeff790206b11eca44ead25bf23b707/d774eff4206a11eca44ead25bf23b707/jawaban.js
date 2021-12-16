var count = 0
for(var i = 0; i <= 100000; i += 109) {
   var hasil1 =  i % 71947
//  console.log(hasil1);
  count += hasil1
}

var count2 = 0
for(var p = 0; p <= 100000; p += 271) {
    
    var hasil2 = p % 71947
    // console.log(hasil2);
    count2 += hasil2
    
}
// console.log(count);
// console.log(count2);

var jumlahAkhir = count + count2

console.log(jumlahAkhir);

