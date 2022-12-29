const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const search = document.querySelector('.search')

btn.addEventListener('click', () => {
    container.classList.toggle('active')
    search.focus()
})