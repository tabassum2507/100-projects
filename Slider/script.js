const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const img = document.querySelectorAll('.images')
const buttom = document.querySelector('.bottom')

let slideNum = 1;
let length = img.length;

for(let i = 0; i < length; i++){
   const div = document.createElement('div')
   div.className = 'button';
   buttom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = "white"

const resetBg = () => {
   buttons.forEach((button) => {
      button.style.backgroundColor = "transparent"
   });
}

buttons.forEach((button, i) => {
   button.addEventListener("click", () => {
      resetBg();
      slider.style.transform = `translateX(-${i * 500}px)`;
      sliderNumber = i + 1;
      button.style.backgroundColor = "white";
   })
})

const nextSlide = () => {
   slider.style.transform = `translateX(-${slideNum*500}px)`
   slideNum++;
}

const firstSlide = () => {
   slider.style.transform = `translateX(0px)`;
      slideNum = 1;
}

const changeColor = ()=>{
   resetBg()
   buttons[slideNum-1].style.backgroundColor = "white";
 }

right.addEventListener("click", () => {
   slideNum < length ? nextSlide() : firstSlide();
   changeColor();
})



const getPrevSlide = () => {
   slider.style.transform = `translateX(-${(slideNum - 1)*500}px)`
   slideNum--;
}

const getLastSlide = () => {
   slider.style.transform = `translateX(-${(length - 1)*500}px)`
   slideNum = length;
}

left.addEventListener("click", () => {
   slideNum > 0 ? getPrevSlide() : getLastSlide() ;
   changeColor();
})

