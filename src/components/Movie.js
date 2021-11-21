function Movie({movie}) {

    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            {movie.original_language && <p>Original Language: {movie.original_language}</p>}
            {movie.release_date && <p>Release Date: {movie.release_date}</p>}
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />}
         
        </div>
    )
}

export default Movie
