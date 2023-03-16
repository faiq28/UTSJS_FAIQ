console.log("UTS JAVASCRIPT");
class Hewan {
    constructor (HewanApa,namaSiapa,umurBerapa,makanannyaApa) {
        this.hewan = HewanApa;
        this.nama = namaSiapa;
        this.umur = umurBerapa;
        this.makanan = makanannyaApa;
    }
    KucingSedangMakanApa () {
        return this.nama + " sedang makan " + this.makanan + " di dapur ";
    }
    AnjingSedangMakanApa () {
        return this.nama + " sedang makan " + this.makanan
    }
}

var Kucing = new Hewan('Kucing','itil','1 tahun','ikan');
console.log(Kucing.hewan);
console.log(Kucing.nama);
console.log(Kucing.umur);
console.log(Kucing.makanan);
console.log(Kucing.KucingSedangMakanApa());

var Anjing = new Hewan('Anjing','Doggy','5 bulan','Daging Kambing');
console.log(Anjing.hewan);
console.log(Anjing.nama);
console.log(Anjing.umur);
console.log(Anjing.makanan);
console.log(Anjing.AnjingSedangMakanApa("di dapur"));


const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const newTextt = document.createElement("h1");
newTextt.textContent = "Berhasil !!"

document.getElementById("btn1").addEventListener("dblclick", function () {
    alert("Tombol Di Klik 2 Kali");
  });

const newText = document.createElement("h1");
newText.textContent = "X RPL"
newText.style.color = "red"


function klick() {
    body.append(newTextt);
}
function mouseIn() {
    body.append(newText);
}
function mouseOut() {
    newText.style.color = "green"
}
function del() {
    body.remove()
}
