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
                        <Col md={12} xs={12} lg={{ span: 12}}>
                            <ShowAll/>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}
export default Home