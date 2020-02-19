import React from 'react'
import '../App.css'
import AboutMe from '../components/AboutMe'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Contacts from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
const ShowAll =()=>{
    return(
      
        <Row>
            <Col xs={12} md lg={{ span: 10, offset: 1 }}>
                <div className="all_container">
                    <Tabs defaultActiveKey="aboutMe" id="uncontrolled-tab-example">
                        <Tab eventKey="aboutMe" title="About Me">
                            <AboutMe/>
                        </Tab>
                        <Tab eventKey="skills" title="Skills">
                            <Skills/>
                        </Tab>
                        <Tab eventKey="projects" title="Projects">
                            <Projects/>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <Contacts/>
                        </Tab>
                    </Tabs>
                </div>
            </Col>
        </Row>
        
        
    )
}

export default ShowAll