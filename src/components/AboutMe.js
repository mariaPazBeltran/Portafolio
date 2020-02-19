/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import photo from '../images/profilePhoto.JPG'
const AboutMe =()=>{
    return(
        <div className="aboutMe_container pt-5">
            <Row>
                <Col lg={{ span: 3, offset: 1 }} md={{ span: 2, offset: 2 }} sm={{ span: 3, offset: 1 }}>
                    <div className='profile_photo'>
                        <img alt= 'profile_Photo' src={photo}></img>
                    </div>
                </Col>
                <Col lg={{ span: 5, offset: 1 }} md={{ span: 6}} sm={{ span: 7 }}>
                    <div className='profile_info'>
                        <h1>María Paz Beltrán</h1>
                        <h4>Front-end Developer</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 10, offset: 1 }} md={{ span: 6}} sm={{ span: 7 }}>
                    <div className='profile_description'>
                        <p> <strong>"Nunca digas nunca"</strong>. Una frase redundante que
                        ha simple vista carece de sentido. Pero ahora, cuando miro mis logros, es
                        cuando entiendo mejor su significado.
                        Yo solía decir '¡Nunca voy a estudiar programación!', pero quien hubiese 
                        pensado que desde el momento en que ese primer <em>Alert</em> se compiló de
                        manera correcta, desearía con tanta fuerza sumergirme en el mundo del código.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe