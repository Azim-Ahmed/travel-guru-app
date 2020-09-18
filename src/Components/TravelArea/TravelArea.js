import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, CardTitle, CardImg } from 'reactstrap';

const TravelArea = (props) => {
  const { title, imgUrl,id } = props.mainTravelPhoto;

  return (

    <Card>
      <CardImg width="50%" src={imgUrl} alt="Travel Guru Photos" />
      <CardBody>
        <CardTitle>{title}</CardTitle>


        <Link to={`/book/${id}`}><Button color="success" size='lg'>Book Now</Button></Link>
      </CardBody>
    </Card>


  );
};

export default TravelArea;