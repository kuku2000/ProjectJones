import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";


const BoxContainer = styled.div`
  width: 380px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #000000;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  margin-left: 60%;
  margin-top:-40%;
  overflow: hidden;
 
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -330px;
  left: -120px;
 background: rgb(28,22,22);
background: linear-gradient(90deg, rgba(28,22,22,1) 0%, rgba(220,5,5,1) 100%, rgba(0,212,255,1) 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  text-align:center;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  text-align:center;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props){
  const [isExpanded, setExpanded]=  useState(false);
  const [active,setactive] = useState("signin");
  const playExpandingAnimation = ()=>{
setExpanded(true);
setTimeout(()=> {

  setExpanded(false);
},expandingTransition.duration*1000 - 1500);
  }
const switchToSignup = ()=> {
playExpandingAnimation();
setTimeout(()=>{
setactive("signup");


}, 400)
}
const switchToSignin = ()=> {
playExpandingAnimation();
setTimeout(()=>{
setactive("signin");


}, 400)
};

  
  const contextValue = {switchToSignup,switchToSignin};
return (
  <AccountContext.Provider value={contextValue}>
  <BoxContainer>
  <TopContainer>
  <BackDrop initial={false} animate={isExpanded ? "expanded":"collapsed"}
   variants={backdropVariants} transition={expandingTransition}>
  </BackDrop>
 {active==="signin" && <HeaderContainer>
  <HeaderText>Welcome back!</HeaderText>
  
  <SmallText>Please sign-in to continue</SmallText>
  </HeaderContainer>}
   {active==="signup" && <HeaderContainer>
  <HeaderText>Create account</HeaderText>
  
  <SmallText>Please sign-up to continue</SmallText>
  </HeaderContainer>}
  </TopContainer>
  <InnerContainer>
  {active === "signin" && <LoginForm/>}
  {active === "signup" && <SignupForm/>}
  
  </InnerContainer>
  </BoxContainer></AccountContext.Provider>)


}
