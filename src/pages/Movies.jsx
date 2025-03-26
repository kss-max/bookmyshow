import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movielist';

const Movies = () => {
  const movies = [
    { 
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Action, Adventure, Sci-Fi',
      language: 'English',
      releaseDate: '26 Apr 2019',
      rating: 8.4,
      price: 250,
      certificate: 'UA'
    },
    {
      id: 2,
      title: 'Inception',
      genre: 'Action, Adventure, Sci-Fi',
      language: 'English',
      releaseDate: '16 Jul 2010',
      rating: 8.8,
      price: 200,
      certificate: 'UA'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      language: 'English',
      releaseDate: '18 Jul 2008',
      rating: 9.0,
      price: 220,
      certificate: 'UA'
    },
    {
      id: 4,
      title: 'Interstellar',
      genre: 'Adventure, Drama, Sci-Fi',
      language: 'English',
      releaseDate: '7 Nov 2014',
      rating: 8.6,
      price: 230,
      certificate: 'UA'
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      genre: 'Crime, Drama',
      language: 'English',
      releaseDate: '21 Oct 1994',
      rating: 8.9,
      price: 180,
      certificate: 'A'
    },
    {
      id: 6,
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      language: 'English',
      releaseDate: '14 Oct 1994',
      rating: 9.3,
      price: 190,
      certificate: 'A'
    },
    {
      id: 7,
      title: 'The Godfather',
      genre: 'Crime, Drama',
      language: 'English',
      releaseDate: '24 Mar 1972',
      rating: 9.2,
      price: 200,
      certificate: 'A'
    },
    {
      id: 8,
      title: 'Fight Club',
      genre: 'Drama',
      language: 'English',
      releaseDate: '15 Oct 1999',
      rating: 8.8,
      price: 210,
      certificate: 'A'
    },
  ];

  return (
    <Container fluid className="py-4">
      <h1 className="mb-4">Movies</h1>
      <MovieList movies={movies} />
    </Container>
  );
};

export default Movies;