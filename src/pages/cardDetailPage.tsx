import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

// interface CardDetailProps {}

const CardDetailPage = () => {
  const { id }: any = useParams();
  const { state } = useLocation();

  return (
    <div>
      <h1>{`Card No.${id}`}</h1>
      <ul>
        <li>{state?.title}</li>
        <li>{state?.subtitle}</li>
        <li>{state?.description}</li>
      </ul>
    </div>
  );
};

export default CardDetailPage;
