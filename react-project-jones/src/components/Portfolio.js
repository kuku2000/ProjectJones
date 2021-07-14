import React,{useState} from 'react'
import Setup from './navbar';
import GlobalStyle from '../globalstyles';
import Drop from './dropdown';
const Portfolio = () => {
     const [isOpen,setisOpen] = useState(false);
  const toggle =()=> {
setisOpen(!isOpen)}
    return (
        <div>
             <Setup toggle={toggle}/>
    <div><GlobalStyle /></div>
    <div><Drop isOpen={isOpen} toggle={toggle}/></div>
    
        </div>
    )
}

export default Portfolio
