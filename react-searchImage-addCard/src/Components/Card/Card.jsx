import React from 'react'
import './Card.css';
const Card = ({url,title,description}) => {
  return (
    <div className='card-wrapper'>
      <div className="card-image">
        <img src={url} alt="ssa" />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default Card
