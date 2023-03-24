
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import ReactDOM from 'react-dom'
import {Container,Col , Row }   from "react-bootstrap";
    import { Form } from "react-bootstrap";

    import img1 from "../assets/img/icons8-react-480.png";
    import img2 from "../assets/img/icons8-javascript-logo-480.png";
    import img3 from "../assets/img/icons8-flutter-480.png";
    import img4 from "../assets/img/icons8-angularjs-480.png";
    import img5 from "../assets/img/icons8-php-logo-480.png";

export const Skills = () =>{

    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
        <container>
           <Row>
            <Col>
            <div className="skill-bx">
                <h2>
                    Skills
                </h2>
                <p>
                Some of the skills I mastered, and I'm practicing at the moment
                </p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item">
                      <img src={img1} alt='Image'/>   
                          <h5> ReactJs</h5>
                          </div>
                          <div className="item">
                      <img src={img2} alt='Image'/>   
                          <h5>JavaScript</h5>
                          </div>                         
                          <div className="item">
                      <img src={img3} alt='Image'/>   
                          <h5>Flutter</h5>
                          </div>
                          <div className="item">
                      <img src={img4} alt='Image'/>   
                          <h5>AngularJS</h5>
                          </div>
                          <div className="item">                      
                      <img src={img5} alt='Image'/>   
                          <h5>php</h5>
                          </div>
                          
                </Carousel>
            </div>
            </Col>
           </Row>
        </container>
        {/* <img className="background-image-left" src={img5} /> */}
        </section>
      )
}