const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const numbers = document.querySelectorAll ('.number')

let currentNum = 1

// next.addEventListener('click', () => {
//     next.style.backgroundColor = 'Red'
// })

next.addEventListener('click', () => {
    currentNum++
    
    if( currentNum > numbers.length){
        currentNum = numbers.length
    }

    update()
})

prev.addEventListener('click',() =>{
    currentNum--;

    if(currentNum < 1){
        currentNum = 1
    }

    update()
})

function update() {
    numbers.forEach((number, idx) => {
       if(idx < currentNum){
        number.classList.add('active')
       } else {
         number.classList.remove('active')
       }

    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1)/ (numbers.length - 1) * 100 + "%"


    if(currentNum === 1){
        prev.disabled = true
    } else if( currentNum === numbers.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
