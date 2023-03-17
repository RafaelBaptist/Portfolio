import {useState,useEffect, Fragment} from "react";
import {Container,Row,Col} from    "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
// import headerImg from "../assets/img/spacegirll.png";
// import headerImg from "../assets/img/eu-removebg-preview.png";
import headerImg from "../assets/img/euia2.png";
import headerImg2 from "../assets/img/estrelas.png";
import headerImg3 from "../assets/img/estrelas (1).png";
import React, { Component }  from 'react';



export const Banner = () => {
    const [loopNum , setLoopNum] = useState (0);
    const [isDeleting, setIsDeleting ] = useState (false);
    const toRotate = [ "Web Developer", "Mobile Designer" , "UI/UX Designer" ];
    const [text, setText] = useState  ('3');
    const [delta, setDelta] = useState(300 );
    const period =2000;

    useEffect(() => {     
        let ticker =setInterval (() => {
           tick(); 
            }, delta)
       
       return () => {clearInterval(ticker)};
    },[text])

      const tick =() => {
        let i = loopNum % toRotate.length;
        let fullText =toRotate [i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length + 1);
     
      setText(updatedText);
     

      if (isDeleting){
        setDelta (100 );
      }

      if (!isDeleting && updatedText === fullText  ) {
        setIsDeleting(true);
        setDelta(period);
      } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum +1) ;
        setDelta(100);
      }  
     }


    return (  <>
        <div className= 'banner'id = 'home' >
           <Container>
            <Row className='align-items-center' >
                <Col xs={12} md={6} xl={7}> 
                <span className="tagline">Wellcome to my Portfolio </span>
                <h1> {`Hi Im Webdecoded `}<span className="tagline">{text }</span></h1>
                <p>lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo</p>
                <button className="vvdbanner" onClick={() =>console.log('connect')}>Let's connect <ArrowRightCircle size={25}     /></button>
            
                </Col>
                <Col xs={12} md={6} xl={5}> 
                <img src  ={headerImg}className="headerImg"/> 
                <img src  ={headerImg2}className="headerImg2"/> 
                <img src  ={headerImg3}className="headerImg3"/> 
                </Col>
              
                
                </Row>
           </Container>
    
         
             
        </div>
        
        </>)
}