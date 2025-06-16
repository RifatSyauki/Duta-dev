

submit_button.addEventListener('click', () => {
    let klinis_score = calculate_clinical_score();
    let nutrisi_score = calculate_nutrition_score();

    if(known_hb.checked) {
        buildChart(input_age.value, input_hb.value);
        ctx.style.display = 'block';
    }

    clinical_result.textContent = klinis_score;
    nutrition_result.textContent = nutrisi_score;

    // let IMT = bb.value/(tb.value*tb.value*0.0001);
    // IMT = IMT.toFixed(2);

    // // console.log(BMI);
    // // console.log(bb);
    // // console.log(BMI);

    // // if(man.checked) {
    // //     if(known_hb.checked) {
    // //         // display_graphics()
    // //     }

        
    // // } else {

    // // }
    // imt_result.textContent = IMT;


})
