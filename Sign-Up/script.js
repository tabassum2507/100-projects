var button = document.querySelector('.Click_me');
var form = document.querySelector('.log_in_form');
var formContent = document.querySelector('.form');
var close = document.querySelector('.close');

var toggleVisibility = function() {
    form.classList.toggle('visible');
    formContent.classList.toggle('position');
}

close.addEventListener('click', toggleVisibility);
button.addEventListener('click', toggleVisibility);


document.addEventListener('click', e => {
    const div = e.target.closest("div").className;
    if(div === 'form visible'){
        toggleVisibility();
    }
})