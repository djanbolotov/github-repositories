import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

type Props = any;
export  const Input: React.FC<Props> = ({ setOrganization, callGetOrganization }) => {
  return (
    <form onSubmit={callGetOrganization}>
      <InputGroup className="m-3">
        <FormControl
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Organization's name"
          aria-label="Organization's name"
          aria-describedby="basic-addon2"
        />
        <Button
          type="submit"
          variant="primary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </form>
  )
}