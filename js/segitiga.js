document.addEventListener("DOMContentLoaded", function () {
  // Hitung Luas
  document.getElementById("formLuas").addEventListener("submit", function (e) {
    e.preventDefault();
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const hasil = document.getElementById("hasilLuas");

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
      hasil.innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
      return;
    }

    const luas = 0.5 * alas * tinggi;
    hasil.innerHTML = `
      <hr>
      <p>L = ½ × a × t</p>
      <p>L = ½ × ${alas} × ${tinggi}</p>
      <p><strong>L = ${luas.toFixed(2)} cm²</strong></p>
    `;
  });

  // Hitung Keliling
  document.getElementById("formKeliling").addEventListener("submit", function (e) {
    e.preventDefault();
    const s1 = parseFloat(document.getElementById("s1").value);
    const s2 = parseFloat(document.getElementById("s2").value);
    const s3 = parseFloat(document.getElementById("s3").value);
    const hasil = document.getElementById("hasilKeliling");

    if ([s1, s2, s3].some(val => isNaN(val) || val <= 0)) {
      hasil.innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
      return;
    }

    const keliling = s1 + s2 + s3;
    hasil.innerHTML = `
      <hr>
      <p>K = S₁ + S₂ + S₃</p>
      <p>K = ${s1} + ${s2} + ${s3}</p>
      <p><strong>K = ${keliling.toFixed(2)} cm</strong></p>
    `;
  });

    // Reset Luas
  document.getElementById("resetLuas").addEventListener("click", function () {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
  });

  // Reset Keliling
  document.getElementById("resetKeliling").addEventListener("click", function () {
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
  });

});
