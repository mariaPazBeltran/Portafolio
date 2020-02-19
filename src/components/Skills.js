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
            <Col lg={{ span: 9, offset: 2 }} md={{ span: 6}} sm={{ span: 7 }}>
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