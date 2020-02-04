import React from 'react'
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import photo from '../images/profilePhoto.JPG'
const AboutMe =()=>{
    return(
        <div className="aboutMe_container pt-5">
            <Row>
                <Col lg={{ span: 2, offset: 1 }} md={{ span: 2, offset: 2 }} sm={{ span: 3, offset: 1 }}>
                    <div className='profile_photo'>
                        <img src={photo}></img>
                    </div>
                </Col>
                <Col lg={{ span: 5, offset: 2 }} md={{ span: 6}} sm={{ span: 7 }}>
                    <div className='profile_info'>
                        <h1>María Paz Beltrán</h1>
                        <h3>Front-end Developer</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 8, offset: 3 }} md={{ span: 6}} sm={{ span: 7 }}>
                    <div className='profile_description'>
                        <p><strong>Un poco sobre mí:</strong> Nunca me habia 
                    interesado el mundo del código.
                    y la razón por la que llegue aqui 
                    definitivamente no fue por amor.
                    Pero desde le momento en que 
                    hice aparecer mi primer <em>Alert</em> en aquella pagina en blanco,
                     mi vida dio un giro de 180° y así como llegue 
                    aquí espero llegar todavia más lejos
                    como desarrolladora</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe