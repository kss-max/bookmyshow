import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedCarousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const nowShowing = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Action, Adventure, Sci-Fi',
      language: 'English',
      duration: '3h 1m',
      certificate: 'UA',
      rating: '8.4',
      image: '/images/avenegrsendgame.jpg',
      price: 250
    },
    {
      id: 2,
      title: 'Inception',
      genre: 'Action, Adventure, Sci-Fi',
      language: 'English',
      duration: '2h 28m',
      certificate: 'UA',
      rating: '8.8',
      image: '/images/6896486.jpg',
      price: 200
    },
    {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      language: 'English',
      duration: '2h 32m',
      certificate: 'UA',
      rating: '9.0',
      image: '/images/darknight.jpg',
      price: 220
    },
    {
      id: 4,
      title: 'Interstellar',
      genre: 'Adventure, Drama, Sci-Fi',
      language: 'English',
      duration: '2h 49m',
      certificate: 'UA',
      rating: '8.6',
      image: '/images/intersteller.jpg',
      price: 230
    },
  ];

  const comingSoon = [
    {
      id: 5,
      title: 'Dune: Part Two',
      genre: 'Action, Adventure, Drama',
      language: 'English',
      duration: '2h 46m',
      certificate: 'UA',
      rating: 'Coming Soon',
      image: '/images/dune.jpg',
      price: 0
    },
    {
      id: 6,
      title: 'The Batman',
      genre: 'Action, Crime, Drama',
      language: 'English',
      duration: '2h 56m',
      certificate: 'UA',
      rating: 'Coming Soon',
      image: '/images/batman.jpg',
      price: 0
    },
    {
      id: 7,
      title: 'Doctor Strange 2',
      genre: 'Action, Adventure, Fantasy',
      language: 'English',
      duration: '2h 6m',
      certificate: 'UA',
      rating: 'Coming Soon',
      image: '/images/doctor.jpg',
      price: 0
    },
    {
      id: 8,
      title: 'Black Panther 2',
      genre: 'Action, Adventure, Sci-Fi',
      language: 'English',
      duration: '2h 41m',
      certificate: 'UA',
      rating: 'Coming Soon',
      image: '/images/blackpanther.jpg',
      price: 0
    },
  ];

  return (
    <Container fluid className="py-4">
      <FeaturedCarousel />
      
      <section className="my-5">
        <h2 className="mb-4">Now Showing</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {nowShowing.map(movie => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </section>
      
      <section className="my-5">
        <h2 className="mb-4">Coming Soon</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {comingSoon.map(movie => (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Home;