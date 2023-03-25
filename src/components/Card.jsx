import React from 'react';
import '../styles/card.css'
function Card({name,job,hobby}) {
  return (
    <div className="card">
        <p>Name: {name}</p>
        <p>Job: {job}</p>
        <p>Hobby: {hobby}</p>
    </div>
  );
}

export default Card