import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/components/carousel.css';

function FeaturedCarousel() {
    const featuredItems = [
        {
            id: 1,
            title: 'Avengers: Endgame',
            description: 'The epic conclusion to the Infinity Saga',
            image: '/images/avenegrsendgame.jpg',
            type: 'movie'
        },
        {
            id: 2,
            title: 'Inception',
            description: 'Your mind is the scene of the crime',
            image: '/images/6896486.jpg',
            type: 'movie'
        },
        {
            id: 3,
            title: 'Coldplay Concert',
            description: 'Music of the Spheres World Tour',
            image: '/images/6896486.jpg',
            type: 'event'
        },
        {
            id: 4,
            title: 'IPL 2023',
            description: 'Indian Premier League Cricket Matches',
            image: '/images/ipl.jpg',
        
            
            type: 'sport'
        },
    ];

    return (
        <Carousel fade indicators={false} interval={3000}>
            {featuredItems.map((item) => (
                <Carousel.Item key={item.id}>
                    <img
                        className="d-block w-100 carousel-img"
                        src={item.image}
                        alt={item.title} />
                    <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <button className="btn btn-primary">Book Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default FeaturedCarousel;