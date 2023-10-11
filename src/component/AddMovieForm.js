import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
//component pour ajouter un movie
const AddMovieForm = ({ onAddMovie }) => {
  //hooks
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddMovie(title, description, posterURL, parseFloat(rating));
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} 
               onChange={e => setTitle(e.target.value)} required
               style={{
                borderRadius:10
              }} />
        <input type="text" placeholder="Description" value={description} 
              onChange={e => setDescription(e.target.value)} required
              style={{
                borderRadius:10
              }} />
        <input type="url" placeholder="Poster URL" value={posterURL} 
        onChange={e => setPosterURL(e.target.value)} required 
        style={{
          borderRadius:10
        }}/>
        <input type="number" placeholder="Rating" min="0" max="10" step="1" value={rating}
         onChange={e => setRating(e.target.value)} required 
         style={{
          borderRadius:10
        }}/>
        <Button variant="success" type="submit"  style={{
                borderRadius:10
              }}>Add</Button>
      </form>
    );
  };
  export default AddMovieForm