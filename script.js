const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

let editItem = null;

btnTambah.addEventListener("click", function () {
  let teksTugas = inputTugas.value.trim();
  let tanggal = inputTanggal.value;

  if (teksTugas === "" || tanggal === "") {
    alert("Tugas dan tanggal harus diisi!");
    return;
  }

  if (editItem !== null) {
    editItem.querySelector(".teks-tugas").innerHTML = teksTugas;
    let spanTgl = editItem.querySelector(".tanggal");
    spanTgl.innerHTML = ` ${tanggal}`;
    spanTgl.dataset.nilai = tanggal;

    editItem = null;
    btnTambah.innerHTML = "Tambah Data";
    inputTugas.value = "";
    inputTanggal.value = "";
    return;
  }

  let listbaru = document.createElement("li");

  let spanbaru = document.createElement("span");
  spanbaru.innerHTML = teksTugas;
  spanbaru.classList.add("teks-tugas");

  let spanTanggal = document.createElement("span");
  spanTanggal.innerHTML = ` ${tanggal}`;
  spanTanggal.dataset.nilai = tanggal;
  spanTanggal.classList.add("tanggal");

  let btnEdit = document.createElement("button");
  btnEdit.innerHTML = "Edit";
  btnEdit.classList.add("edit");

  btnEdit.addEventListener("click", function () {
    inputTugas.value = spanbaru.innerHTML;
    inputTanggal.value = spanTanggal.dataset.nilai;
    editItem = listbaru;
    btnTambah.innerHTML = "Simpan Edit";
  });

  let btnHapus = document.createElement("button");
  btnHapus.innerHTML = "Hapus";
  btnHapus.classList.add("hapus");

  btnHapus.addEventListener("click", function () {
    daftarTugas.removeChild(listbaru);
  });

  let divTombol = document.createElement("div");
  divTombol.classList.add("tombol-group");
  divTombol.appendChild(btnEdit);
  divTombol.appendChild(btnHapus);

  listbaru.appendChild(spanbaru);
  listbaru.appendChild(spanTanggal);
  listbaru.appendChild(divTombol);
  daftarTugas.appendChild(listbaru);

  inputTugas.value = "";
  inputTanggal.value = "";
});
