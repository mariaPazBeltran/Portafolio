import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProviderContext from './states/provider'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyNavbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contact'

function App() {
    return (
        <ProviderContext id= 'xd'>
            
            <div className="image_background"></div>
            <Container>
                <Row>
                    <Col md={12} xs={12} lg={{ span: 12}}>
                        <Row id='ss'>
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
                    </Col>
                </Row>
            </Container>
            
        </ProviderContext>
    )
}
export default App
