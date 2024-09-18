// Import React library
import React from 'react';
import './Card.css'; // Assuming you create a separate CSS file for styling

// Define the Card component
const Card = () => {

  return (
    <div className="card">
      <img src="img.jpg" alt="rizal" style={{ width: '100%' }} />
      <h1>José Rizal</h1>
      <p className="title">Writter, Example</p>
      <p>Noli me tangere</p>
      <a href="#"><i className="fa fa-dribbble" /></a>
      <a href="#"><i className="fa fa-twitter" /></a>
      <a href="#"><i className="fa fa-linkedin" /></a>
      <a href="#"><i className="fa fa-facebook" /></a>
      <p><button>Contact</button></p>
    </div>
  );
};

export default Card;
