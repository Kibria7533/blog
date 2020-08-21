import React, { Component } from 'react';
import {BrowserRouter ,NavLink}from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="row sticky-top">
      <div className="col-lg-12">
        <div className="mynav ">
          <div className="subnav">
            <button className="subnavbtn"><NavLink to="/">Home</NavLink></button>
          </div>
          <div className="subnav">
            <button className="subnavbtn"><NavLink to="/">PHP</NavLink></button>
          </div>
          <div className="subnav">
            <button className="subnavbtn"><NavLink to="/">HTML</NavLink></button>
          </div>
          <div className="subnav">
            <NavLink className="subnavbtn" to="/">CSS</NavLink>
          </div>
          <div className="subnav">
            <button className="subnavbtn"><NavLink to="/">CSS</NavLink></button>
          </div>
          <div className="subnav">
            <button className="subnavbtn"><NavLink to="/">CSS</NavLink></button>
          </div>   
          <div className="subnav">
          <button className="subnavbtn"><NavLink to="/">Home</NavLink><i className="fa fa-caret-down" /></button> 
            <div className="subnav-content">
              <a href="#link1">Link 1</a>
              <a href="#link2">Link 2</a>
              <a href="#link3">Link 3</a>
              <a href="#link4">Link 4</a>
            </div>
          </div>
          <div className="mymegamenu">
            <button className="dropbtn">mymegamenu
              <i className="fa fa-caret-down" />
            </button>
            <div className="mymegamenu-content">
              <div className="row">
                <div className="column">
                  <h3>Category 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mymegamenu">
            <button className="dropbtn">mymegamenu
              <i className="fa fa-caret-down" />
            </button>
            <div className="mymegamenu-content">
              <div className="row">
                <div className="column">
                  <h3>Category 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </BrowserRouter>
            
        );
    }
}

export default Header;