import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description, url, alt }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <h2 className="card-subtitle">{subtitle}</h2>
      <img src={`${url ? url : '#'}`} alt={alt} />
      <p className="card-description">{description}</p>
      <button
        onClick={() => {
          navigate(`/card/detail/${1}`, { state: { title, subtitle, description, url, alt } });
        }}
      >
        Go detail
      </button>
    </div>
  );
};

export default Card;
