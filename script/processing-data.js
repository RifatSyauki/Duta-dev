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


function calculate_clinical_score() {
    let score = 0;

    if(input_lemas.checked) score++;
    if(input_pusing.checked) score++;
    if(input_pucat.checked) score++;
    if(input_sesak.checked) score++;
    if(input_konsen.checked) score++;
    if(input_ngantuk.checked) score++;
    if(input_dJantung.checked) score++;
    if(input_nafas.checked) score++;
    if(input_dingin.checked) score++;

    if(score < 4) return 'Tidak signifian';
    else if(score < 7) return 'Sedang';
    else return 'Tinggi';
}

function calculate_nutrition_score() {
    let score = 0;

    if(input_besi.checked) score++;
    if(input_vitC.checked) score++;
    if(input_cafein.checked) score++;
    if(input_mens.checked) score++;
    if(input_donor.checked) score++;
    if(input_heavyPhysic.checked) score++;

    console.log(score);

    if(score < 2) return 'Rendah';
    else if(score < 4) return 'Sedang';
    else return 'Tinggi';
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