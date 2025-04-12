// algoritma
// deklarasi nama dan peran
// cek nama apakah kosong
// kalau kosong "nama wajib diisi!"
// kalau kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// jika memilih Ksatria, kamu dapat menyerang dengan senjatamu!
// jika Tabib, kamu akan membantu temanmu yang terluka
// jika Penyihir, ciptakan keajaiban yang membantu kemenanganmu!
// jika peran kosong "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"

let nama = "kazu", peran = "penyihir";

if (nama === "") {
    console.log("nama wajib diisi")
} else {
    if (peran === ""){
    console.log("pilih peranmu untuk memulai game:")
    } else {
}
    switch(peran) {
        case "ksatria":
            console.log(`Halo ${nama} kamu dapat menyerang dengan senjatamu!`);
            break;
        case "tabib":
            console.log(`Halo ${nama} kamu akan membantu temanmu yang terluka`);
            break;
        case "penyihir":
            console.log(`Halo ${nama} ciptakan keajaiban yang membantu kemenanganmu!`)
            break;
        default:
        console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
}
}