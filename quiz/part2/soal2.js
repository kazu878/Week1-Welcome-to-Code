// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];
let second = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let third = word[15] + word[16];
let fourth = word[18] + word[19];
let fifth = word[21] + word[22] + word[23] + word[24];


console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + second);
console.log('Third Word: ' + third);
console.log('Fourth Word: ' + fourth);
console.log('Fifth Word: ' + fifth);

//lanjutkan dengan struktur log diatas