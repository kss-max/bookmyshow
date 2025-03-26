import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar, FaPlayCircle } from 'react-icons/fa';
import '../styles/components/cards.css'; 

function MovieCard({ movie }) {
  return (
    <Card className="bms-movie-card shadow-sm h-100">
      <Card.Img 
        variant="top" 
        src={movie.image} 
        alt={movie.title}
        className="bms-card-img"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5 mb-2">{movie.title}</Card.Title>
        <Card.Text className="text-muted small mb-3">
          {movie.genre} | {movie.language} | {movie.duration}
        </Card.Text>
        
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-primary">{movie.certificate}</span>
          <span className="text-warning">
            <FaStar className="me-1" />
            {movie.rating}
          </span>
        </div>

        <div className="mt-auto d-grid gap-2">
          <Button variant="primary" size="sm">
            Book Now
          </Button>
          <Button variant="outline-secondary" size="sm">
            <FaPlayCircle className="me-1" />
            Trailer
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;