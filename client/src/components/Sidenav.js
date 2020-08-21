import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Sidenav extends Component {
  render() {
    return (
      <div class="sidenav">
        <Link activeclassName="active"
          to="1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500} className="nav-link" >
          chapter 1
                 </Link>
        <Link activeclassName="active"
          to="2"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500} className="nav-link" >
          chapter 2
                 </Link>
       <Link activeclassName="active"
          to="3"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 3
         </Link>

         <Link activeclassName="active"
          to="4"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 4
         </Link>
         <Link activeclassName="active"
          to="5"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 5
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 6
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
                 </Link>
        <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
                 </Link>
       <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>

         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
         <Link activeclassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} className="nav-link" >
          chapter 1
         </Link>
        
      </div>
    );
  }
}

export default Sidenav;