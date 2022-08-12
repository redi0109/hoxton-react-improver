
export function MoviesList (props: { movies: any[]; }){
    return (
        <div className="movies_list">
        <h1>Movie List</h1>

        <div className="movies">
               {props.movies.map((movie:any) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img className="img_poster" src={movie.title} alt={movie.title} />
            </div>
          ))}
        </div>
      </div>
    )
}