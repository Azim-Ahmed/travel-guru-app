import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import fakeData from '../../fakeData/Profile'
import { Form, FormGroup, Label, Input } from 'reactstrap';


const PlaceDetails = () => {
    const { id } = useParams()

    const fakeDataa = fakeData.slice(0,3)
   
const matchId = fakeDataa.map(place => place.id ===  id )
console.log(matchId);
   
  
    const styleContainer ={
        display : "flex",

    }
    const submitForm = (e)=>{
        e.preventDefault()
    }

    return (

        <Container>
            <div style = {styleContainer}>
              
              
                <div style ={{width : "50%", color : "white", border : "2px solid gray"}}>
                        {/* <h1>{title}</h1>
                        <p>{longDesc}</p> */}

                </div>
                <div style ={{width : "50%", color : "white"}}>
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