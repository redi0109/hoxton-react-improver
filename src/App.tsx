
import { useState } from 'react'
import './App.css'

function App() {
 const [movies, setMovies] = useState ([
  {
    id: 1,
    title: "Star Wars",
    year: "1977",
    imdbID: "tt0076759",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
},
{
    id: 2,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
    imdbID: "tt0080684",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
    id: 3,
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: "1983",
    imdbID: "tt0086190",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
    id: 4,
    title: "Star Wars: Episode VII - The Force Awakens",
    year: "2015",
    imdbID: "tt2488496",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
},
{
    id: 5,
    title: "Star Wars: Episode I - The Phantom Menace",
    year: "1999",
    imdbID: "tt0120915",
    type: "movie",
  poster: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
    id: 6,
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: "2005",
    imdbID: "tt0121766",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
},
{
    id: 7,
    title: "Star Wars: Episode II - Attack of the Clones",
    year: "2002",
    imdbID: "tt0121765",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
},
{
    id: 8,
    title: "Star Wars: Episode VIII - The Last Jedi",
    year: "2017",
    imdbID: "tt2527336",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
},
{
    id: 9,
    title: "Rogue One: A Star Wars Story",
    year: "2016",
    imdbID: "tt3748528",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
},
{
    id: 10,
    title: "Star Wars: Episode IX - The Rise of Skywalker",
    year: "2019",
    imdbID: "tt2527338",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
}
 ])

  return (
    <div className="App">
   
   <div className="movies_list">
            <h1>Movie List</h1>

            <div className="movies">
                {movies.map(movie => (

            <>
            <h3>{movie.title}</h3>
            <img className="img_poster" src={movie.title} alt="movie poster" /></>
                ))}
            </div>
        </div>
    </div>
  )
}

export default App
