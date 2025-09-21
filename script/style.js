let currentStep = 0;

nextBtn.addEventListener("click", () => {
    // console.log('next');
    steps[currentStep].classList.remove("active-slide");

    currentStep++;

    if (currentStep >= steps.length-1) {
        nextBtn.innerHTML = "SELESAI";
    }

    if(currentStep > 0) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }

    if(currentStep > steps.length-1) {
        
    }

    steps[currentStep].classList.add("active-slide");
});

backBtn.addEventListener("click", () => {
    // console.log('next');
    steps[currentStep].classList.remove("active-slide");

    currentStep--;

    if (currentStep < steps.length-1) {
        nextBtn.innerHTML = "Selanjutnya";
    }

    if(currentStep > 0) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }

    steps[currentStep].classList.add("active-slide");
});

known_hb.addEventListener('change', function() {
    form_hb.style.display = 'block';
});

not_known_hb.addEventListener('change', function() {
    form_hb.style.display = 'none';
});


// input_woman.addEventListener('change', function() {
//     form_mens.style.display = (this.checked)? 'flex' : 'none';
// });

// input_man.addEventListener('change', function() {
//     form_mens.style.display = (this.checked)? 'none' : 'flex';
// });
