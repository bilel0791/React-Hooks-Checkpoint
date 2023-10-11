import 'bootstrap/dist/css/bootstrap.min.css';
//le titre et le rating pour le filter 

const Filter = ({ onTitleChange, onRatingChange }) => (
  <div>
    
    <div className="filter">
      <input  type="text" 
              placeholder="title" 
              onChange={e => onTitleChange(e.target.value)}
              style={{
                borderRadius:10
              }} />
      <input  type="number"
              placeholder="rating" min="0" max="10" step="1"
              onChange={e => onRatingChange(parseFloat(e.target.value))} 
              style={{
                borderRadius:10
              }}/>
    </div>
    
    </div>
  );

  export default Filter;