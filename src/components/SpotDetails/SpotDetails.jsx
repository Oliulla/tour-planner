import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SpotDetails = () => {
  const spotDetails = useLoaderData();
  console.log(spotDetails);
  return (
    <div className="bgImg">
      <Header />
      <Container>
        <Row className="mt-5">
          <Col lg="5" className="mt-5 text-white pt-4 ps-5">
            <h4 className="text-uppercase">{spotDetails.name}</h4>
            <p>
              To get a nice tour you can grap our nicest plan. We guide our
              clients nicely. Visit BD most beautiful places with us. You will
              get 24 hours service.
            </p>
          </Col>
          <Col lg="7" className="mt-5 w-50 ms-3">
            <Card className=" border-primary px-4 py-2">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Start</Form.Label>
                  <Form.Control type="text" defaultValue="Dhaka" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control type="text" defaultValue={spotDetails.name} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <label hrmlfor="startTrip">Start:</label>
                  <input
                    type="date"
                    id="startTrip"
                    name="startTrip"
                    min="2022-22-10"
                  />

                  <label hrmlfor="endTrip" className="ms-3">
                    End:
                  </label>
                  <input type="date" id="endTrip" name="endTrip" />
                </Form.Group>

                <Link>
                  <Button variant="primary" type="submit">
                    Confirm Booking
                  </Button>
                </Link>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpotDetails;
