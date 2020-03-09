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
                    {state.skills.map((images, index)=>{
                        return <img key={index} src={images} alt='skill_icon'/>
                    })}
                </div>
            </Col>
        </Row>
    )
}

export default Skills