document.addEventListener("DOMContentLoaded", function () {
  // Luas Persegi
  document.getElementById("formLuas").addEventListener("submit", function (e) {
    e.preventDefault();
    const sisi = parseFloat(document.getElementById("sisiLuas").value);
    const hasil = document.getElementById("hasilLuas");

    if (isNaN(sisi) || sisi <= 0) {
      hasil.innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
      return;
    }

    const luas = sisi * sisi;

    hasil.innerHTML = `
      <hr>
      <p>L = S × S</p>
      <p>L = ${sisi} × ${sisi}</p>
      <p><strong>L = ${luas.toFixed(2)} cm²</strong></p>
    `;
  });

  // Keliling Persegi
  document.getElementById("formKeliling").addEventListener("submit", function (e) {
    e.preventDefault();
    const sisi = parseFloat(document.getElementById("sisiKeliling").value);
    const hasil = document.getElementById("hasilKeliling");

    if (isNaN(sisi) || sisi <= 0) {
      hasil.innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
      return;
    }

    const keliling = 4 * sisi;

    hasil.innerHTML = `
      <hr>
      <p>K = 4 × S</p>
      <p>K = 4 × ${sisi}</p>
      <p><strong>K = ${keliling.toFixed(2)} cm</strong></p>
    `;
  });

    // Reset Luas Persegi
  document.getElementById("resetLuas").addEventListener("click", function () {
    document.getElementById("sisiLuas").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
  });

  // Reset Keliling Persegi
  document.getElementById("resetKeliling").addEventListener("click", function () {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
  });

});
