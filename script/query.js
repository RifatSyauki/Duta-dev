const input_name = document.getElementById("nama");
const known_hb = document.getElementById("hb-known");
const not_known_hb = document.getElementById("hb-not-known");
const submit_button = document.getElementById("submit-button");
const input_age = document.getElementById("umur");
const input_man = document.getElementById("laki");
const input_woman = document.getElementById("cewe");
const input_tb = document.getElementById("tb");
const input_bb = document.getElementById("bb");
const input_hb = document.getElementById("hb");
const input_nadi = document.getElementById("nadi");

const gejala = document.querySelectorAll(".q-gejala input[type='checkbox']:checked");
// const input_lemas = document.getElementById("lemas");
// const input_lelah = document.getElementById("lelah");
// const input_pucat = document.getElementById("pucat");
// const input_sesak = document.getElementById("sesak");
// const input_konsen = document.getElementById("konsen");
// const input_ngantuk = document.getElementById("ngantuk");
// const input_dJantung = document.getElementById("j-takteratur");
// const input_nafas = document.getElementById("nafas");
// const input_dingin = document.getElementById("dingin");
// const input_pusing = document.getElementById("pusing");

// const input_besi = document.querySelector('input[name="besi"]:checked');
// const input_vitC = document.querySelector('input[name="c"]:checked');
// const input_cafein = document.querySelector('input[name="cafein"]:checked');
// const input_mens = document.querySelector('input[name="mens"]:checked');
// const input_donor = document.querySelector('input[name="donor"]:checked');
// const input_heavyPhysic = document.querySelector('input[name="fisik"]:checked');

// const clinical_result = document.getElementById("clinical");
// const nutrition_result = document.getElementById("nutrition");
const ctx = document.getElementById('graphChart');

const steps = document.querySelectorAll(".form-slide");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

const warning = document.querySelectorAll(".warning");

const form = document.querySelector(".con-form");
const res = document.querySelector(".con-result");

const res_nama = document.getElementById("nama-user");
const res_kategori = document.getElementById("kategori");
const res_grap = document.getElementById("grap")
const res_penjelasan = document.getElementById("penjelasan");
const res_saran = document.getElementById("saran");

const refresh_btn = document.getElementById("refresh-btn");