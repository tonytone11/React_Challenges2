import React from 'react';

const MovieDetails = ({ movie }) => {
    if (!movie) return null;

    return (
        <div className="details-container">
            <h2 className='details-title'>{movie.Title}</h2>
            <img className='details-img' src={movie.Poster} alt={movie.Title} />
            <div className='movie-info'>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Runtime:</strong> {movie.Runtime}</p>
                <p><strong>Awards:</strong> {movie.Awards}</p>
                <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
            </div>

        </div>
    );
};

export default MovieDetails;
