function buildChart(age, hb) {

    let data_hb_user = [null, null, null, null, null, null, null, null];
    if(age < 0.084) data_hb_user[0] = hb;
    else if(age < 0.18) data_hb_user[1] = hb;
    else if(age < 0.25) data_hb_user[2] = hb;
    else if(age < 0.5) data_hb_user[3] = hb;
    else if(age < 1) data_hb_user[4] = hb;
    else if(age < 4) data_hb_user[5] = hb;
    else if(age < 14) data_hb_user[6] = hb;
    else data_hb_user[7] = hb;

    const dataHb = {
        labels: ['0 Bulan', '1 Bulan', '2 Bulan', '3-5 Bulan', '6-11 Bulan', '1-3 Tahun', '4-13 Tahun', '14-25 Tahun'],
        datasets: [
            {
                label: 'posisimu',
                data: data_hb_user,
                pointRadius: 4,
                borderColor: 'transparent',
                pointStyle: 'circle',
                backgroundColor: 'orange',
                showLine: false,
            },
            {
                label: 'laki-laki',
                data: [14, 12, 10.5, 10.5, 11, 11, 11.5, 14],
                borderWidth: 2,
                pointRadius: 2,
                pointStyle: 'rectRot',
                borderColor: 'rgba(72, 166, 253, 1)',
            },
            {
                label: 'perempuan',
                data: [14, 12, 10.5, 10.5, 11, 11, 11.5, 12],
                borderWidth: 2,
                pointRadius: 3,
                pointStyle: 'circle',
                borderColor: 'rgb(226,68,91)',
            },
        ]
    };

    // 3. Konfigurasi Grafik
    const config = {
        type: 'line',
        data: dataHb,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom', // Posisi legenda: 'top', 'bottom', 'left', 'right'
                },
                title: {
                    display: true,
                    text: 'Grafik Nilai Hb Berdasarkan Umur dan Jenis Kelamin'
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value, index, values) {
                            return value + ' g/dl';
                        }
                    }
                }
            }
        }
    };

    const graphChart = new Chart(ctx.getContext('2d'), config);
}


function calculate_nutrition_score() {
    let score = 0;

    score += Number(document.querySelector('input[name="cafein"]:checked').value);
    score += Number(document.querySelector('input[name="mens"]:checked').value);
    score += Number(document.querySelector('input[name="donor"]:checked').value);
    score += Number(document.querySelector('input[name="fisik"]:checked').value);
    score += 4 - Number(document.querySelector('input[name="c"]:checked').value);
    score += 4 - Number(document.querySelector('input[name="besi"]:checked').value);

    return score/6;
}

function calculate_imt() {
    let score = input_bb / Math.sqrt(input_tb/100);
}

function clearAndRefresh() {
  document.querySelectorAll("input").forEach(el => {
    if (el.type !== "submit" && el.type !== "button" && el.type !== "radio" && el.type !== "checkbox") {
      el.value = "";
    }
    if (el.type === "checkbox" || el.type === "radio") {
      el.checked = false;
    }
  });

  location.reload();
}

function res_display_form(categori) {
    res_nama.innerHTML = input_name.value;

    if(categori == 1) {
        res_kategori.innerHTML = `Berdasarkan data yang kami dapat, kamu digolongkan sebagai remaja dengan resiko <span class="font-pink">rendah</span> terkena anemia. Hal tersebut didasari dari tidak adanya gejala yang signifikan, pola makan dan gaya hidup yang cukup baik, dan IMT yang normal.`;
        res_penjelasan.innerHTML = "Remaja dalam kategori ini kemungkinan tidak mengalami anemia. Sistem tubuhnya stabil, suplai zat besi cukup, dan keseimbangan gizi mendukung produksi hemoglobin.";
        res_saran.innerHTML = `
                    <ul style="text-align: left;">
                        <li>Pertahankan pola makan  bergizi</li>
                        <li>Lanjutkan kebiasaan hidup sehat</li>
                        <li>Tetap cek Hb secara berkala (misalnya 6 bulan sekali)</li>
                    </ul>`
    } else if(categori == 2) {
        res_kategori.innerHTML = `Berdasarkan data yang kami dapat, kamu digolongkan sebagai remaja dengan resiko <span class="font-pink">menengah</span> terkena anemia. Hal tersebut didasari adanya gejala ringan / sedang, pola makan dan gaya hidup yang kurang teratur, dan IMT tidak ideal.`;
        res_penjelasan.innerHTML = "Resiko anemia mulai muncul karena asupan gizi yang tidak optimal atau tubuh tidak menyerap zat besi secara efisien. Bisa juga akibat kebutuhan zat besi meningkat (misalnya karena menstruasi pada remaja putri), tapi tidak diimbangi asupan.";
        res_saran.innerHTML = `
                    <ul style="text-align: left;">
                        <li>Tingkatkan konsumsi makanan tinggi zat besi (bayam, daging, kacang-kacangan.</li>
                        <li>Rutin aktivitas fisik ringan</li>
                        <li>Cek Hb ulang dalam 1 bulan</li>
                        <li>Konsultasi ke petugas kesehatan bila kondisi tidak membaik</li>
                    </ul>`
    } else {
        res_kategori.innerHTML = `Berdasarkan data yang kami dapat, kamu digolongkan sebagai remaja dengan resiko <span class="font-pink">tinggi</span> terkena anemia. Hal tersebut didasari pada banyaknya gejala, pola makan yang buruk, dan IMT yang rendah (gizi buruk) atau tinggi (obesitas).`;
        res_penjelasan.innerHTML = "Remaja dalam kategori ini kemungkinan besar beresiko terkena anemia. Bisa jadi karena asupan gizi yang buruk, gaya hidup tidak sehat, atau kehilangan banyak darah (misal : menstruasi berat).";
        res_saran.innerHTML = `
                    <ul style="text-align: left;">
                        <li>Segera ke layanan kesehatan untuk pemeriksaan darah lengkap</li>
                        <li>Pertimbangkan suplementasi zat besi di bawah pengawasan medis</li>
                        <li>Konsultasi gizi untuk pola makan seimbang</li>
                        <li>jika parah, perlu penanganan medis lebih lanjut</li>
                    </ul>`
    }
}

function submit() {
    const skor_nutrisi = calculate_nutrition_score();
    const skor_imt = calculate_imt();
    console.log(skor_nutrisi);
    console.log(gejala.length);
    if(known_hb.checked) console.log(input_hb.value);

        if(known_hb.checked && input_hb.value < 10) {
            if(gejala.length <= 6 && skor_nutrisi <= 3 && skor_imt >= 17 && skor_imt < 30) {
                res_display_form(2);
            } else {
                res_display_form(3);
            }
        } else if(known_hb.checked && input_hb.value < 12 && input_woman.checked) {
            if(gejala.length < 4 && skor_nutrisi < 2 && skor_imt >= 17 && skor_imt < 30) {
                res_display_form(1);
            } else if(skor_nutrisi < 4 && skor_imt >= 17 && skor_imt < 30) {
                res_display_form(2)
            } else {
                res_display_form(3);
            }
        } else {
            if(gejala.length < 2 && skor_nutrisi < 2 && skor_imt >= 17 && skor_imt < 30) {
                res_display_form(1);
            } else  if(gejala.length < 7 || skor_nutrisi < 4) {
                res_display_form(2);
            } else {
                res_display_form(3);
            }
        }

    if(known_hb.checked) {
        buildChart(input_age.value, input_hb.value);
        res_grap.style.display = "block";
    }

    form.style.display = "none";
    res.style.display = "block";
}