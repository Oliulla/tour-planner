import React from "react";
import Card from "react-bootstrap/Card";
import './EachCard.css'

const EachCard = ({ spot, handleBooking }) => {
  const {id, name} = spot;
  return (
    <div className="col-6 mt-4">
      <Card onClick={() => handleBooking(id, name)} className="bg-dark text-white border cardStyle">
        <Card.Img variant="top" src="" alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EachCard;
