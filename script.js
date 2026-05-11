const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function () {
  let teksTugas = inputTugas.value;
  let tanggal = inputTanggal.value;

  if (teksTugas === "") {
    alert("Data harus dimasukkan!");
    return;
  }

  let listbaru = document.createElement("li");

  let spanbaru = document.createElement("span");
  spanbaru.innerHTML = teksTugas;

  // tanggal
  let spanTanggal = document.createElement("span");
  spanTanggal.innerHTML = tanggal ? ` ${tanggal}` : "";
  spanTanggal.classList.add("tanggal");

  // Tombol Hapus
  let btnHapus = document.createElement("button");
  btnHapus.innerHTML = "Hapus";
  btnHapus.classList.add("hapus");

  btnHapus.addEventListener("click", function () {
    daftarTugas.removeChild(listbaru);
  });

  listbaru.appendChild(spanbaru);
  listbaru.appendChild(spanTanggal);
  listbaru.appendChild(btnHapus);
  daftarTugas.appendChild(listbaru);

  inputTugas.value = "";
  inputTanggal.value = "";
});
