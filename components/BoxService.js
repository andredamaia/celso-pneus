import React from 'react';

// import { Container } from './styles';

export default function BoxService({ img, title }) {
  return (
    <div className="col-12 col-md-4">
      <div className="box-service">
        <img src={`/static/${img}.jpg`} alt={`${title}`} />

        <span>{title}</span>
      </div>
    </div>
  );
}
