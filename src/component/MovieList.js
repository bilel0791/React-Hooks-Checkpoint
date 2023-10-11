import MovieCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
// MovieList componet pour afficher tous  movies  
const MovieList = ({ movies }) => (
    <div style={{display:"flex"}} >
      { movies.length === 0 ? <p>No movies available.</p> : movies.map(movie => <MovieCard key={movie.title} {...movie} />)}
    </div>
  );

  export default MovieList;