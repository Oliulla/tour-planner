import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import SpotCards from "../SpotCards/SpotCards";
import "./Home.css";

const Home = () => {
  const spots = useLoaderData();
  const [clientSpot, setClientSpot] = useState(null);
  const [clientSpotId, setClientSpotId] = useState(null);

  const handleBooking = (clickedId, clickedSpot) => {
    setClientSpot(clickedSpot);
    setClientSpotId(clickedId);
  }

  return (
    <div className="bgImg">
      <Header />
      <Container>
        <Row>
          <Col lg="5" className="mt-5 text-white pt-4 ps-5">
            <h4 className="text-uppercase">{clientSpot ? clientSpot : 'pahartoli'}</h4>
            <p>
                To get a nice tour you can grap our nicest plan. We guide our clients nicely.
                Visit BD most beautiful places with us. You will get 24 hours service.
            </p>
            <Link to={`/spots/${clientSpotId ? clientSpotId : 4}`}>
                <button>Get Tickets</button>
            </Link>
          </Col>
          <Col lg="7">
            <SpotCards spots={spots} handleBooking={handleBooking} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
