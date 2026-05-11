const inputTugas = document.getElementById("inputTugas");
const inputTanggal = document.getElementById("inputTanggal");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

let editItem = null;

function updateBadgeStatus(item, status) {
  let badge = item.querySelector(".badge-status");
  if (!badge) {
    badge = document.createElement("span");
    badge.classList.add("badge-status");
    item.insertBefore(badge, item.querySelector(".tombol-group"));
  }
  badge.className = "badge-status";
  badge.classList.add(status.toLowerCase().replace(" ", ""));
  badge.innerHTML = status;
}

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

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox-tugas");

  let spanbaru = document.createElement("span");
  spanbaru.innerHTML = teksTugas;
  spanbaru.classList.add("teks-tugas");

  let spanTanggal = document.createElement("span");
  spanTanggal.innerHTML = ` ${tanggal}`;
  spanTanggal.dataset.nilai = tanggal;
  spanTanggal.classList.add("tanggal");

  let badge = document.createElement("span");
  badge.classList.add("badge-status", "onprogress");
  badge.innerHTML = "On Progress";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      badge.className = "badge-status done";
      badge.innerHTML = "Done";
      spanbaru.style.textDecoration = "line-through";
      spanbaru.style.color = "#94a3b8";
    } else {
      badge.className = "badge-status onprogress";
      badge.innerHTML = "On Progress";
      spanbaru.style.textDecoration = "none";
      spanbaru.style.color = "";
    }
  });

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

  listbaru.appendChild(checkbox);
  listbaru.appendChild(spanbaru);
  listbaru.appendChild(spanTanggal);
  listbaru.appendChild(badge);
  listbaru.appendChild(divTombol);
  daftarTugas.appendChild(listbaru);

  inputTugas.value = "";
  inputTanggal.value = "";
});

const card = document.querySelector(".card");

card.addEventListener("mousemove", function (e) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -8;
  const rotateY = ((x - centerX) / centerX) * 8;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
});

card.addEventListener("mouseleave", function () {
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
});
