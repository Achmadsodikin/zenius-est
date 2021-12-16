//memasukan nilai 2 pangkat 2198 tidak bisa dilakukan karna angka yang dihasilkan sangat banyak dan akan menghasilkan nilai infinit, dibawah ini saya menggunakan contoh 
//angka yang lebih kecil tetapi dengan perhitungan yang sama dan cara yang sama.(2 pangkat 1000 adalah nominal tertinggi)
//
//menggunakan bigInt karna angka yang akan di hasilkan lebih dari 16 digit
var coba = BigInt( Math.pow(2, 219))

var k1 = coba.toString()
var count = 0

for(var i = 0, u =3; i < k1.length; i +=3, u += 3 ) {
    
  var result = k1.substring(i, u)
    console.log(result);
    count += parseInt(result)

}
console.log(count);


