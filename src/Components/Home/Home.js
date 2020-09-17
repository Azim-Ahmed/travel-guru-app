import React, { useEffect, useState } from 'react';

import './Home.css'
import fakedata from '../../fakeData/Profile'

import { Container, Row } from 'reactstrap';
import TravelArea from '../TravelArea/TravelArea';





const Home = () => {
  const [places, setPlaces] = useState([])


  console.log(places);
  useEffect(() => {
    const mainPagePhoto = fakedata.filter(fphoto => fphoto.front === 'frontphoto')
    setPlaces(mainPagePhoto)

  }, [])
  return (


    <Container>
      <Row>
        {
          places && places.map((mainPagePhoto, i) =>
            <div className="col-md-4">
              <TravelArea key={i} mainTravelPhoto={mainPagePhoto}></TravelArea>
            </div>
          )
        }
      </Row>
    </Container>


  );
};

export default Home;