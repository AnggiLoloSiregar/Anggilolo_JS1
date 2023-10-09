// if else
let nilai = 95;

if (nilai >= 80) {
  console.log("Anda cantik");
} else {
  console.log("Anda Jelek");
}

// if else if
let nilai = 75;

if (nilai >= 80) {
  console.log("Dewasa A+");
} else if (nilai >= 80) {
  console.log("Anak-anak A");
} else if (nilai >= 70) {
  console.log("Balita B");
} else {
  console.log("Nilai umur C atau lebih rendah");
}

// nested if
let Hargabuku = 6000;
let Hargapulpen = 1000;

if (Hargabuku >= 6000) {
  if (Hargapulpen >= 1000) {
    console.log("Mahal buku dan pulpen murah");
  } else {
    console.log("lebih mahal buku, tetapi lebih murah pulpen.");
  }
} else {
  console.log("lebih murah pulpen");
}

// switch case
let Bulan = "Oktober";

switch (Bulan) {
  case "Oktober":
    console.log("Bulan ini adalah Oktober");
    break;
  case "November":
    console.log("Bulan ini adalah november");
    break;
  case "Desember":
    console.log("Bulan ini adalah Desember");
    break;
  default:
    console.log("Bulan yang Anda masukkan tidak valid.");
}

// for statement
for (let i = 1; i <= "Merksepatu"; i++) {
    console.log(i);
  }
  const merksepatu = ["Buccheri", "Nike", "zara", "Charles & Keith"];

  for (let i = 0; i < merksepatu.length; i++) {
    console.log(merksepatu[i]);
  }


  // while, do while
  let i = 7;
do {
  console.log("senin,selasa,rabu,kamis,jumat,sabtu,minggu");
  i++;
} while (i <= 7);

  // function
  let pembagian = (angka1, angka2) => {
    return angka1 / angka2;
  };
  let hasilPembagian = pembagian(100, 5);
  console.log("Hasil pembagian:", hasilPembagian);