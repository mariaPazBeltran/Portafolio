/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-target-blank */
import React, {useContext} from 'react'
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyContext from '../states/MyContext'
import Card from 'react-bootstrap/Card'

const Projects =()=>{
    const {state} = useContext(MyContext)
    return(
        <Row>
            <Col lg={{ span: 10, offset: 1 }} md={{ span: 6}} sm={{ span: 7 }}>
                <div className='projects_container'>
                    {state.projects.map((val, index)=>{
                        return <div key={index}>
                            <Card  style={{ width: '18rem' }}>
                                <div className='img_card'>
                                    <Card.Img variant="top" src={val.image} /></div>
                                
                                <Card.Body>
                                    <Card.Title>{val.project}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Link href={val.code}>Código</Card.Link>
                                    <Card.Link href={val.deploy}>deploy</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    })}
                </div>
            </Col>
        </Row>
    )
}

export default Projects