import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import fakedata from '../../fakeData/Profile'
import { Form, FormGroup, Label, Input } from 'reactstrap';


const PlaceDetails = () => {
    const { id } = useParams()
    const [placeDetails, setPlaceDetails] = useState([])
    useEffect(() => {
        const matchId = fakedata.find(place => place.id = `${id}`)
        setPlaceDetails(matchId)
    }, [])
    const styleContainer ={
        display : "flex",

    }
    const submitForm = (e)=>{
        e.preventDefault()
    }

    return (

        <Container>
            <div style = {styleContainer}>
                <div style ={{width : "50%"}}>
    <h1>{placeDetails.title}</h1>
    <p>{placeDetails.longDesc}</p>

                </div>
                <div style ={{width : "50%"}}>
                <Form onSubmit = {submitForm}>
     
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
       <Label for="exampleDatetime">Datetime</Label>
       <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
       />
     </FormGroup>
     <FormGroup>
       <Label for="exampleDate">Date</Label>
       <Input
         type="date"
         name="date"
         id="exampleDate"
         placeholder="date placeholder"
       />
     </FormGroup>
     
     <Link to ='/login'><Button size='lg' block color="primary">Start Booking</Button></Link>
   </Form>

                </div>
            </div>

        </Container >
    );
};

export default PlaceDetails;