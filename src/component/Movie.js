import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import dbMovies from '../dbMovies';
import Button from 'react-bootstrap/Button';
//import './App.css';

const Movie=()=>{

const [movies, setMovies] = useState(dbMovies);
const [filteredMovies, setFilteredMovies] = useState([]);
const [filter, setFilter] = useState({ title: '', rating: 0 });

const addMovie = (title, description, posterURL, rating) => {
  const newMovie = { title, description, posterURL, rating };
  setMovies(prevMovies => [...prevMovies, newMovie]);
};

const filterMovies = () => {
  const { title, rating } = filter;
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()) && movie.rating === rating);
  setFilteredMovies(filtered);
};


return (
    
  <div>
    <div  >
        <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{display:"flex", justifyContent:"flex-start"}}>
    <Filter
      onTitleChange={title => setFilter(prevFilter => ({ ...prevFilter, title }))}
      onRatingChange={rating => setFilter(prevFilter => ({ ...prevFilter, rating }))}
    />

<Button variant="primary" onClick={filterMovies }  style={{
                borderRadius:10
              }}>Filter</Button>
    </div>
    <div style={{display:"flex"}}>
    <AddMovieForm onAddMovie={addMovie} />
    </div>
    </div>
    <div style={{alignContent:"center"}}>
    <h1>Movie List</h1>
    <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
    </div>
    
    </div>
  </div>
);
};

export default Movie;