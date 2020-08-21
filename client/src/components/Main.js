import React, { Component } from 'react';
import Sidenav from './Sidenav';
import Comment from './Comment';
import Rightsidenav from './Rightsidenav';
import Footer from './Footer';
import Body from '../Body';
class Main extends Component {
    render() {
        return (
            <div className="row">
            <Sidenav/>
            <div className="col-lg-10">
              <div className="col-lg-8 main">
                 <Body/>
                <Comment/>    
              </div>
              <div className="col-lg-2">
               <Rightsidenav/>
              </div>
              <Footer/>
            </div>
          </div>
        );
    }
}

export default Main;