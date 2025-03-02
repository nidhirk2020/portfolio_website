import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <Social />
    </Container>
  )
}

export default Contact