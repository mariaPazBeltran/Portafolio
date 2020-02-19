/* eslint-disable react/jsx-no-target-blank */
import React, {useContext} from 'react'
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyContext from '../states/MyContext'
//import photo from '../images/profilePhoto.JPG'
const Contacts =()=>{
    const {state} = useContext(MyContext)
    return(
        <Row>
            <Col lg={{ span: 9, offset: 2 }} md={{ span: 6}} sm={{ span: 7 }}>
                <div className='contact_container'>
                    {state.contacts.map((val, index)=>{
                        return <div key={index} >
                            <img src={val.logo} alt='contact_icon'/>
                            <span><a target='_blank' href={val.url}>{val.name}</a></span>
                        </div>
                    })}
                </div>
            </Col>
        </Row>
    )
}

export default Contacts