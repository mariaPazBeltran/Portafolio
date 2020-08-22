import React, {useContext} from 'react'
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyContext from '../states/MyContext'
//import photo from '../images/profilePhoto.JPG'
const Skills =()=>{
    const {state} = useContext(MyContext)
    return(
        <Row>
            <Col lg={{ span: 10, offset: 1 }} md={{ span: 12}} sm={{ span: 12 }}>
                <div className='skill_container'>
                    {state.skills.map((skill, index)=>{
                        return <div key={index}>
                            <img  src={skill.img} alt='skill_icon'/>
                            <p>{skill.name}</p>
                        </div>
                    })}
                </div>
            </Col>
        </Row>
    )
}

export default Skills