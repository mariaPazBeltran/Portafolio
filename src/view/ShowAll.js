import React from 'react'
import '../App.css'
import AboutMe from '../components/AboutMe'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ShowAll =()=>{
    return(
      
        <Row>
            <Col xs md lg={{ span: 12, offset: 12 }}>
                <div className="all_container">
                    <AboutMe/>
                </div>
            </Col>
        </Row>
        
        
    )
}

export default ShowAll