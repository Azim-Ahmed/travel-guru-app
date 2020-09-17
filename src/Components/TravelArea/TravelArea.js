import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, CardBody, Button, CardTitle,  CardImg } from 'reactstrap';

const TravelArea = (props) => {
    const {title, imgUrl,front,id} = props.mainTravelPhoto

    // const history = useHistory()
    // const handlePlace = () => {
    //     history.push(`/book/${front}`);
    // }

  return (
    
      <Card>
        <CardImg  width="50%" src= {imgUrl} alt="Travel Guru Photos" />
        <CardBody>
  <CardTitle>{title}</CardTitle>
  <CardTitle>{front}</CardTitle>
  <CardTitle>{id}</CardTitle>

          
          <Link to = {`book/${id}`}><Button color = "success" size = 'lg'>Book Now</Button></Link>
        </CardBody>
      </Card>
     
    
  );
};

export default TravelArea;