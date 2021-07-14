import React, {useState} from 'react'
import styled from 'styled-components/macro'
import ReactPlayer from 'react-player';
import heroVideo from './video/video.mp4';
import './app.css';
import Setup from './navbar';
import GlobalStyle from '../globalstyles';
import Drop from './dropdown';
import {AccountBox} from './account box'
import About from './About';
import CalltoAction from './CalltoAction';
import Faq from './Faq';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import {FooterContainer} from '../container/footer'


   const Herosection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;


`;
const Herowrapper = styled.div`
width:100%;
height:100%
display:flex;
justify-content:center;
align-items:center;
overflow: hidden;
position: relative;

`;

const Hero = () => {
     const [isOpen,setisOpen] = useState(false);
  const toggle =()=> {
setisOpen(!isOpen)

  }
    return (
        <React.Fragment>
        <Herosection>
        <Herowrapper>
        <Setup toggle={toggle}/>
    <div><GlobalStyle /></div>
    <div><Drop isOpen={isOpen} toggle={toggle}/></div>
    
  
       
      <h1 className='title'>
     
           Work with real-time data, make us  of our algorithms and understand how the market changes by the day. Gain confidence, start investing!</h1>
        
        <ReactPlayer url={heroVideo} playing loop muted width='100%' height='100%' style={{zIndex:'-10',filter:'brightness(15%)' }}>
        </ReactPlayer></Herowrapper>
    
  
        </Herosection>
        <AccountBox />
                
<About />
<CalltoAction/>
<Faq/>
<FooterContainer/>
        </React.Fragment>
    )
}

export default Hero
 