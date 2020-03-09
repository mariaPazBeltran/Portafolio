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
            <Col lg={{ span: 10, offset: 1 }} md={{ span: 12}} sm={{ span: 12 }}>
                <div className='projects_container'>
                    {state.projects.map((val, index)=>{
                        return <div className='card_container' key={index}>
                            <Card  style={{ width: '16rem' }}>
                                <div className='img_card'>
                                    < img className='imgProjects' alt='project_img'src={val.image}></img>
                                </div>
                                
                                <Card.Body>
                                    <Card.Title>{val.project}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{val.description}</Card.Subtitle>
                                    <div className='linksProjects'>
                                        <a target='_blank' href={val.code}>Código</a>
                                        <a target='_blank' href={val.deploy}>Deploy</a>
                                    </div>
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