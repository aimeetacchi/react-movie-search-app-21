import React from 'react'

import Movie from './Movie';

const Movies = ({movieData}) => {

    return (
        <div className="row row-wrap row-gap">
            {movieData.map((movie) => {
                    console.log(movie)
                    return (
                        <Movie key={movie.id} movie={movie} />

                    )
            })}
        </div>
    )
        
}

export default Movies
