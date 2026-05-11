const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function () {
  let teksTugas = inputTugas.value;

  if (teksTugas === "") {
    alert("Data harus dimasukkan!");
    return;
  }

  let listbaru = document.createElement("li");
  let spanbaru = document.createElement("span");
  spanbaru.innerHTML = teksTugas;

  listbaru.appendChild(spanbaru);
  listbaru.appendChild(btnHapus);
  daftarTugas.appendChild(listbaru);

  inputTugas.value = "";
});
