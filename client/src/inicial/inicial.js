import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Filme 1',
    description: 'Descrição do Filme 1',
    imageLink: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Filme 2',
    description: 'Descrição do Filme 2',
    imageLink: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Filme 3',
    description: 'Descrição do Filme 3',
    imageLink: 'https://via.placeholder.com/300x200',
  },
];

function HomePage() {
  return (
    <div className="container">
      <h1>Lista de Filmes</h1>
      <div>
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.imageLink} alt={movie.title} />
            </Link>
            <h2 className="card-title">{movie.title}</h2>
            <p className="card-description">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
