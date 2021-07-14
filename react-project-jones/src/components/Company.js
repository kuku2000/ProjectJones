import React,{useState} from 'react'
import Setup from './navbar';
import GlobalStyle from '../globalstyles';
import Drop from './dropdown';
import Search from './Search';
import {Container,Row,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Company = () => {
     const [isOpen,setisOpen] = useState(false);
  const toggle =()=> {
setisOpen(!isOpen)}
    return (
        
        <React.Fragment>
             <Setup toggle={toggle}/>
    <div><GlobalStyle /></div>
    <div><Drop isOpen={isOpen} toggle={toggle}/></div>
    <Search/>

    <Container style={{ backgroundColor:'transparent',marginTop:'30vh', position:'absolute', marginLeft:'12vw'}}>
    <Row style={{paddingBottom:'5vh',paddingTop:'5vh'}}>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    </Row>

    <Row style={{paddingBottom:'5vh',paddingTop:'5vh'}}>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    </Row>

     <Row style={{paddingBottom:'5vh',paddingTop:'5vh'}}>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    </Row>

     <Row style={{paddingBottom:'5vh',paddingTop:'5vh'}}>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    <Col  style={{color:'whitesmoke',zIndex:'1000',width:'50%'}}><Container style={{borderStyle:"outset",borderBlockColor:'whitesmoke', height:'10vh'}}><Row><Col><Row><div><h4 style={{marginTop:'1vh',marginLeft:'2vh'}}>Company 1</h4></div></Row>
    <Row><div><h5 style={{marginLeft:'6vh'}}>RIL</h5></div></Row>
    </Col>
    <Col><h3 style={{marginTop:'2vh',marginLeft:'5vw'}}>$$$</h3></Col>
    <Col><div><Button type='button' style={{color:'whitesmoke',marginLeft:'90px',marginTop:'2vh'}}>BUY</Button></div></Col>
    </Row></Container></Col>
    </Row>
    
    
    
    </Container>





        </React.Fragment>
    )
}

export default Company
