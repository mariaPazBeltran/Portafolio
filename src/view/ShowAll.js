import React from 'react'
import '../App.css'
import AboutMe from '../components/AboutMe'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Contacts from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import MyNavbar from '../components/Navbar'
import {BrowserRouter as Router,
    Route, Switch} from 'react-router-dom'
const ShowAll =()=>{
    return(
      
        <Row>
            <Col xs={12} md lg={{ span: 10, offset: 1 }}>
                <div className="all_container">
                    <Router>
                        <MyNavbar/>
                        <Switch>
                            <Route exact path="/" component={ AboutMe }/>
                            <Route path="/skills" component={ Skills } />
                            <Route path="/projects" component={ Projects } />
                            <Route path="/contacts" component={ Contacts } />
                        </Switch>
  
                    </Router>
                </div>
            </Col>
        </Row>
        
        
    )
}

export default ShowAll