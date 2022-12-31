const jokes = document.getElementById('jokes')
const jokebtn = document.getElementById('btn')

jokebtn.addEventListener('click', generateJoke)

generateJoke()

// async function generateJoke(){
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }


//     const res = await fetch('https://icanhazdadjoke.com', config)

//     const data = await res.json()

//     jokes.innerHTML = data.joke
// }

function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokes.innerHTML = data.joke
    })
}