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
            <Col lg={{ span: 10, offset: 1 }} md={{ span: 12}} sm={{ span: 12 }}>
                <div className='contact_container'>
                    {state.contacts.map((val, index)=>{
                        return <div key={index} >
                            <a target='_blank' href={val.url}><img src={val.logo} alt='contact_icon'/><p>{val.name}</p></a>
                        </div>
                    })}
                </div>
            </Col>
        </Row>
    )
}

export default Contacts