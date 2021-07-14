import React,{useState} from 'react'
import Setup from './navbar';
import GlobalStyle from '../globalstyles';
import Drop from './dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
const Aboutus = () => {
     const [isOpen,setisOpen] = useState(false);
  const toggle =()=> {
setisOpen(!isOpen)}
    return (
        <React.Fragment>
       
             <Setup toggle={toggle}/>
    <div><GlobalStyle /></div>
    <div><Drop isOpen={isOpen} toggle={toggle}/></div>
     <Container style={{position:'absolute',zIndex:'1000',marginTop:'150px',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
    <h1 style={{color:'whitesmoke'}}>About</h1>
   
   
   
   
   
   
    </Container>
       
    </React.Fragment>
    )
}

export default Aboutus
