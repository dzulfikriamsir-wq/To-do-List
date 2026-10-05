console.log("To-Do List siap digunakan");

const inputTugas = document.getElementById("input-tugas");
const btnTambah = document.getElementById("btn-tambah");
const daftarTugas = document.getElementById("daftar-tugas");

const pesanPeringatan = document.getElementById("pesan-peringatan");

const totalTugas = document.getElementById("total-tugas");
const tugasSelesai = document.getElementById("tugas-selesai");
const tugasBelumSelesai = document.getElementById("tugas-belum-selesai");


function tambahTugas() {
    const isiTugas = inputTugas.value.trim();

    if (isiTugas === "") {
        pesanPeringatan.innerText = "Tugas tidak boleh kosong!";
        return;
    }

    const tugasBaru = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const teksTugas = document.createElement("span");
    teksTugas.innerText = isiTugas;

    const btnHapus = document.createElement("button");
    btnHapus.innerText = "Hapus";

    tugasBaru.appendChild(checkbox);
    tugasBaru.appendChild(teksTugas);
    tugasBaru.appendChild(btnHapus);

    checkbox.addEventListener("change", function() {
        teksTugas.classList.toggle("completed");
        perbaruiStatistik();
    });

    btnHapus.addEventListener("click", function() {
        tugasBaru.remove();
        perbaruiStatistik();
    });

    daftarTugas.appendChild(tugasBaru);

    perbaruiStatistik();

    inputTugas.value = "";
    pesanPeringatan.innerText = "";
}


function perbaruiStatistik() {
    const semuaTugas = daftarTugas.querySelectorAll("li");
    const tugasYangSelesai = daftarTugas.querySelectorAll(".completed");

    const jumlahTotal = semuaTugas.length;
    const jumlahSelesai = tugasYangSelesai.length;
    const jumlahBelumSelesai = jumlahTotal - jumlahSelesai;

    totalTugas.innerText = jumlahTotal;
    tugasSelesai.innerText = jumlahSelesai;
    tugasBelumSelesai.innerText = jumlahBelumSelesai;
}


btnTambah.addEventListener("click", tambahTugas);


inputTugas.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        tambahTugas();
    }
});     