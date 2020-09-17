import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
     
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
      <FormGroup>
        <Label for="submit">Submit</Label>
        <Input type="submit" name="submit" id="submit" />
      </FormGroup>
    </Form>
  );
}

export default Example;