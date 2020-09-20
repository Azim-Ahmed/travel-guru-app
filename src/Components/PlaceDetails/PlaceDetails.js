import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import fakeData from '../../fakeData/Profile'
import { Form, FormGroup, Label, Input } from 'reactstrap';


const PlaceDetails = () => {
  const { placeId } = useParams()
  const matchingCardDetails = fakeData.find(item => item.id === parseInt(placeId))
  const { title, description } = matchingCardDetails



  const submitForm = (e) => {
    e.preventDefault()
  }

  return (

    <Container style={{ color: "white" }}>
      <Row>
        <Col style={{ border: "2px solid white", boxShadow: "5px 5px 10px black" }} md={5}>
          <h1>{title}</h1>
          <p>{description}</p>
        </Col>






        <Col md={7}>
          <Form onSubmit={submitForm}>

            <FormGroup>
              <Label for="location">Origin</Label>
              <Input
                type="location"
                name="location"
                placeholder="From Where to go"
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Destination</Label>
              <Input
                type="location"
                name="location"
                placeholder="Destination you want"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDatetime">From Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDatetime"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">To Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>

            <Link to='/search'><Button size='lg' block color="warning">Start Booking</Button></Link>
          </Form>
        </Col>


      </Row>

    </Container >
  );
};

export default PlaceDetails;