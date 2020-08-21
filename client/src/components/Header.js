import React, { Component } from 'react';
import {BrowserRouter ,Link}from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <BrowserRouter>
            <div class="row sticky-top">
      <div class="col-lg-12">
        <div class="mynav ">
        <div class="subnav">
            <button class="subnavbtn"><Link to="/"> Home </Link> </button>
          </div>
          <div class="subnav">
            <button class="subnavbtn"><Link to="/"> Html <i class="fa fa-caret-down"></i></Link> </button>
            <div class="subnav-content">
              <a href="#company"></a>
              <a href="#team">Team</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
          <div class="subnav">
          <button class="subnavbtn"><Link  to="/"> Python <i class="fa fa-caret-down"></i></Link> </button>
            <div class="subnav-content">
              <a href="#bring">Bring</a>
              <a href="#deliver">Deliver</a>
              <a href="#package">Package</a>
              <a href="#express">Express</a>
            </div>
          </div>
         
          <div class="mymegamenu">
            <button class="dropbtn"><Link  to="/"> Css <i class="fa fa-caret-down"></i></Link>
            </button>
            <div class="mymegamenu-content">
              
              <div class="row">
                <div class="column">
                  <h3>Category 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div class="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div class="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mymegamenu">
            <button class="dropbtn"><Link to="/"> JavaScript<i class="fa fa-caret-down"></i></Link>
            </button>
            <div class="mymegamenu-content">
              
              <div class="row">
                <div class="column">
                  <h3>Category 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div class="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div class="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          <div class="subnav">
            <button class="subnavbtn"><Link to="/"> Php </Link> </button>
            
          </div>
        </div>
      </div>
    

    </div>
            </BrowserRouter>
            
        );
    }
}

export default Header;