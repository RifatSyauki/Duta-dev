

known_hb.addEventListener('change', function() {
    form_hb.style.display = (this.checked)? 'flex' : 'none';
});

input_woman.addEventListener('change', function() {
    form_mens.style.display = (this.checked)? 'flex' : 'none';
});

input_man.addEventListener('change', function() {
    form_mens.style.display = (this.checked)? 'none' : 'flex';
});
