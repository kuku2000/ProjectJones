import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col,Row } from 'react-bootstrap';
import './app.css'
import {fadeInLeft} from 'react-animations'
import styled, {keyframes} from 'styled-components';

const Bounce=styled.div`
animation:2s ${keyframes`${fadeInLeft}`} 
`;
const About = () => {
    return (
        <Bounce>
        <Container style={{padding:'5vh', marginTop:'10vh'}}>
        
        <h1 style={{paddingBottom:'4vw',fontSize:'3vw',textAlign:'center',color:'whitesmoke'}}>Hey People! Lets know the product better.</h1>
  
  <Row className="show-grid">
  
   <Col md={6} xs={6}>
    <Card className='Card' style={{padding:'2vw',marginBottom:'2vw',color:'whitesmoke',borderBlockColor:'maroon'}}>
    <h3 style={{fontSize:'2vw' }}>Helps everyone invest in the stock market easily</h3>
    </Card>
    <Card className='Card' style={{padding:'2vw',marginBottom:'2vw',color:'whitesmoke' ,borderBlockColor:'maroon'}}>
    <h3 style={{fontSize:'2vw'}}>Helps everyone invest in the stock market easily</h3>
    </Card>
    
    </Col>

    <Col md={6} xs={6}>
    <Card className='Card' style={{padding:'2vw',marginBottom:'2vw',color:'whitesmoke',borderBlockColor:'maroon'}}>
    <h3 style={{fontSize:'2vw' }}>Helps everyone invest in the stock market easily</h3>
    </Card>
    <Card className='Card' style={{padding:'2vw',marginBottom:'2vw',color:'whitesmoke',borderBlockColor:'maroon'}}>
    <h3 style={{fontSize:'2vw'}}>Helps everyone invest in the stock market easily</h3>
    </Card>
    </Col>
    </Row>
        
        
        </Container> </Bounce>
    )
}

export default About
