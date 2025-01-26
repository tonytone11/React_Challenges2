import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import MovieDetails from './components/MovieDetails';

// Medium
const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovieRequest = useCallback(async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=bd382e07`

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }, [searchValue]);

  // Fetching details of selected movie
  const getMovieDetails = async (movieTitle) => {
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&plot=short&apikey=bd382e07`

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    if (responseJson.Response === 'True') {
      setSelectedMovie(responseJson);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue, getMovieRequest]);

  return (
    <div className='main-container'>
      <div className='header'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {!selectedMovie ? (
        <div className='row'>
          <MovieList movies={movies} onMovieClick={getMovieDetails} />
        </div>
      ) : (
        <div className='movieDetails'>
          <MovieDetails movie={selectedMovie} />
          <button onClick={() => setSelectedMovie(null)}>
            Back to Search
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieApp;
