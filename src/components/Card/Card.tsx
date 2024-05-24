import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description, url, alt }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <h2 className="card-subtitle">{subtitle}</h2>
      <img src={`${url ? url : '#'}`} alt={alt} />
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
