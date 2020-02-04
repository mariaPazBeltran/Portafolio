import React, {Component } from 'react'
import '../App.css'
import ShowAll from './ShowAll'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
class Home extends Component{
    render(){
        return(
            <div className="home_container">
                <div className="image_background"></div>
                <Container>
                    <Row>
                        <Col md={10} xs={10} lg={{ span: 10, offset: 1 }}>
                            <ShowAll/>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}
export default Home