import React, { useState } from 'react';
import { Table, Form, ButtonGroup, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { FaFilter, FaSortAlphaDown, FaSortAlphaUp, FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa';

const MovieList = ({ movies }) => {
  const [filter, setFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'ascending' });

  const filteredMovies = filter === 'all' 
    ? movies 
    : movies.filter(movie => movie.genre.toLowerCase().includes(filter.toLowerCase()));

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? 
      (key === 'title' ? <FaSortAlphaDown /> : <FaSortNumericDown />) : 
      (key === 'title' ? <FaSortAlphaUp /> : <FaSortNumericUp />);
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <Form.Select 
          style={{ width: '200px' }} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Genres</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="sci-fi">Sci-Fi</option>
        </Form.Select>
        
        <ButtonGroup>
          <Button 
            variant="outline-secondary" 
            onClick={() => requestSort('title')}
          >
            Sort by Title {getSortIcon('title')}
          </Button>
          <Button 
            variant="outline-secondary" 
            onClick={() => requestSort('releaseDate')}
          >
            Sort by Date {getSortIcon('releaseDate')}
          </Button>
          <Button 
            variant="outline-secondary" 
            onClick={() => requestSort('rating')}
          >
            Sort by Rating {getSortIcon('rating')}
          </Button>
        </ButtonGroup>
      </div>
      
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Genre</th>
            <th>Language</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <strong>{movie.title}</strong>
                <div className="text-muted small">{movie.certificate}</div>
              </td>
              <td>{movie.genre}</td>
              <td>{movie.language}</td>
              <td>{movie.releaseDate}</td>
              <td className="text-warning">
                <FaStar /> {movie.rating}
              </td>
              <td>₹{movie.price}</td>
              <td>
                <button className="btn btn-sm btn-primary">Book Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;