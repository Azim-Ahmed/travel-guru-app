import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardImg } from 'reactstrap';

const TravelArea = (props) => {
  const { title, imgUrl, id } = props.mainTravelPhoto;

  return (
    <Link to={`/book/${id}`}>
      <Card style={{ background: { imgUrl }, backgroundColor: "gray" }}>

        <CardImg width="50%" src={imgUrl} alt="Travel Guru Photos" />
        <Button color="warning"> <CardTitle><strong>{title}</strong></CardTitle></Button>

      </Card>
    </Link>

  );
};

export default TravelArea;