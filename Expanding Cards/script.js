const panels = document.querySelectorAll('.panel') 


//adding active class to active div
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

//removing active class

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}