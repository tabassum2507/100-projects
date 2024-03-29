const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG = 'https://image.tmdb.org/t/p/w1280'
const SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview} = movie //destructuring


        const movieE1 = document.createElement('div')
        movieE1.classList.add('movie')

        movieE1.innerHTML= `
            <img src="${IMG + poster_path}" alt="${title}">
            
            <div class="mov-info">
             <h3>${title}</h3>
             <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>       
            `

            main.appendChild(movieE1)
    })

}
    
 
function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    } else if(vote >= 5){
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH + searchTerm)

        search.value = ''
    }else{
        window.location.reload()
    }
})
    
    
   