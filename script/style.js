let currentStep = 0;

nextBtn.addEventListener("click", () => {
    let next = true;
    console.log(currentStep);

    switch(currentStep) {
        case 0:
            if(!input_name.value.trim() || !input_age.value.trim() || (!input_man.value.trim() && !input_woman.value.trim()) || !input_tb.value.trim() || !input_bb.value.trim()) {
                warning[currentStep].style.display = "block";
                next = false;
            }
            break;
        case 1:
            // console.log((!known_hb.value.trim() || !not_known_hb.value.trim()));
            if(!document.querySelector('input[name="hb-known"]:checked') || !input_nadi.value.trim()) {
                warning[currentStep].style.display = "block";
                next = false;
            }
            break;
        case 3:
            if(!document.querySelector('input[name="besi"]:checked') || !document.querySelector('input[name="c"]:checked') || !document.querySelector('input[name="cafein"]:checked')) {
                warning[currentStep].style.display = "block";
                next = false;
            }
            break;
        case 4:
            if(!document.querySelector('input[name="mens"]:checked') || !document.querySelector('input[name="donor"]:checked') || !document.querySelector('input[name="fisik"]:checked')) {
                warning[currentStep].style.display = "block";
                next = false;
            }
            break;
    }

    if(next) {
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
            form.style.display = "none";
            submit();
        } else {
            steps[currentStep].classList.add("active-slide");
        }

    }
});

backBtn.addEventListener("click", () => {
    // console.log('next');
    steps[currentStep].classList.remove("active-slide");

    currentStep--;

    warning[currentStep].style.display = "none";

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
    input_hb.style.display = 'block';
});

not_known_hb.addEventListener('change', function() {
    input_hb.style.display = 'none';
});


// input_woman.addEventListener('change', function() {
//     form_mens.style.display = (this.checked)? 'flex' : 'none';
// });

// input_man.addEventListener('change', function() {
//     form_mens.style.display = (this.checked)? 'none' : 'flex';
// });
