function generateRandomNumber() {
  const part1 = Math.floor(10 + Math.random() * 90); // Menghasilkan angka antara 10 dan 99
  const part2 = Math.floor(1000 + Math.random() * 9000); // Menghasilkan angka antara 1000 dan 9999
  const part3 = Math.floor(100000 + Math.random() * 900000); // Menghasilkan angka antara 100000 dan 999999

  return `${part1} - ${part2} - ${part3}`;
}
function generateThreeRandomNumbers() {
  return Math.floor(Math.random() * 1000); // Menghasilkan angka acak antara 0 dan 999
}

function generateSevenRandomNumbers() {
  return Math.floor(Math.random() * 10000000); // Menghasilkan angka acak antara 0 dan 9999999
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      const inputs = form.querySelectorAll(
        'input[type="text"], input[type="number"]'
      );
      let valid = true;
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          alert("ngisi form yang bener anjing!");
          valid = false;
        }
      });
      if (!valid) {
        event.preventDefault();
      } else {
        window.location.href = "accepted.html";
      }
    });
  }
});

function checkNumber(number) {
  if (typeof number === "number") {
    if (number.toString().startsWith("0")) {
      return number;
    } else {
      return number < 10 ? "0" + number : number;
    }
  } else {
    return number;
  }
}

function sendData(event) {
  event.preventDefault();
  const nomorPeserta = generateRandomNumber();
  const nama = document.getElementById("nama").value.toUpperCase();
  let hari = document.getElementById("hari").value;
  hari = checkNumber(hari);
  let bulan = document.getElementById("bulan").value;
  bulan = checkNumber(bulan);
  const tahun = document.getElementById("tahun").value;
  const universitas =
    generateThreeRandomNumbers() +
    " - " +
    document.getElementById("universitas").value.toUpperCase();
  const jurusan =
    generateSevenRandomNumbers() +
    " - " +
    document.getElementById("jurusan").value.toUpperCase();

  console.log(nomorPeserta, nama, hari, bulan, tahun, universitas, jurusan);

  localStorage.setItem(
    "formData",
    JSON.stringify({
      nomorPeserta,
      nama,
      hari,
      bulan,
      tahun,
      universitas,
      jurusan,
    })
  );
}

const data = JSON.parse(localStorage.getItem("formData"));

document.getElementById("nomorPeserta").textContent = data.nomorPeserta;

document.getElementById("namaPeserta").textContent = data.nama;

document.getElementById("tanggalLahirPeserta").textContent =
  data.hari + " - " + data.bulan + " - " + data.tahun;

document.getElementById("universitasPeserta").textContent = data.universitas;

document.getElementById("JurusanPeserta").textContent = data.jurusan;

document.getElementById("nomorMobile").textContent = data.nomorPeserta;

document.getElementById("namaMobile").textContent = data.nama;

document.getElementById("tanggalLahirMobile").textContent =
  data.hari + " - " + data.bulan + " - " + data.tahun;

document.getElementById("universitasMobile").textContent = data.universitas;

document.getElementById("JurusanMobile").textContent = data.jurusan;

function captureAndSaveScreen() {
  html2canvas(document.body).then(function (canvas) {
    var dataURL = canvas.toDataURL("image/png");

    var link = document.createElement("a");
    link.href = dataURL;
    link.download = "fakesnbt.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
