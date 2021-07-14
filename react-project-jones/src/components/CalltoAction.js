import React, {useRef} from 'react'
import {useIntersection} from 'react-use'
import {Container} from 'react-bootstrap'
import gsap from 'gsap'
import Ctavideo from './video/Vid.mov'
import ReactPlayer from 'react-player'
import './App.scss'

const CalltoAction = () => {

 let sectionRef = useRef(null);

let intersection = useIntersection(sectionRef,{

    root:null,
    rootMargin: '0px',
    threshold: 0.6
});
const fadeIn =(element) =>{
gsap.to(element,1,{
    opacity:1,
    y:-60,
    duration:2,
    ease:'power4.out',
    stagger: {
        amount: .3
    }
})

}
const fadeOut = (element) =>{gsap.to(element,1,{
    opacity:0,
    y:-20,
    ease:'power4.out',
     duration:1
    
})}
intersection && intersection.isIntersecting< 0.6 ?
fadeOut('.fadeIn'):fadeIn('.fadeIn'); 

      
    return (
       <section className='sectionSecond'>
       <Container ref={sectionRef} className='fadeIn' style={{padding:'5vh', marginTop:'10vh'}}>
        
        <h1 style={{paddingBottom:'4vw',fontSize:'3vw',textAlign:'center',color:'whitesmoke'}}>Looking to invest in the stock-market with ease? </h1>
   <ul style={{color:'whitesmoke'}}>
        <li style={{paddingBottom:'3vw'}}>Lorem ipsum</li>
        <li style={{paddingBottom:'3vw'}}>Lorem ipsum</li>
        <li style={{paddingBottom:'3vw'}}>Lorem ipsum</li>
        <li style={{paddingBottom:'3vw'}}>Lorem ipsum</li>
        <li style={{paddingBottom:'3vw'}}>Lorem ipsum</li>
        </ul>
        <ReactPlayer url={Ctavideo} muted loop playing width='45%' height='auto' style={{marginLeft:'45vw', marginTop:'-25vw'}}></ReactPlayer>
       
        </Container></section>
    )
}

export default CalltoAction
