import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div
                    className='movie-container'
                    key={index}
                    onClick={() => props.onMovieClick(movie.Title)}>
                    <img src={movie.Poster} alt={movie.Title}></img>
                </div>
            ))}
        </>
    )
};

export default MovieList;
