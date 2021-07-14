import React, { useState,useRef } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useIntersection } from 'react-use';
import gsap from 'gsap'
import './App.scss'
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  
`;

const Container = styled.div`
  position: absolute;
  top: 10%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

`;

const Wrap = styled.div`
 background: rgb(0, 0, 0);
background: radial-gradient(circle, rgba(0, 0, 0, 1) 97%, rgba(255, 0, 0, 1) 100%);
box-shadow: tomato 2vw;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size:2.5vw;
  }

  span {
    
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: transparent;
  color: whitesmoke;
  width: 100%;
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid tomato;
  border-top: 1px solid tomato;

  p {
    font-size: 2.5vw;
  }
`;

const Accordion = () => {
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


  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: 'whitesmoke', size: '25px' }}>
     <h1 style={{paddingBottom:'4vw',fontSize:'3vw',textAlign:'center',color:'whitesmoke',marginTop:'10vh'}}>Frequently Asked Questions </h1>
      <AccordionSection className='faq' ref={sectionRef}>
        <Container className='fadeIn'>

          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
