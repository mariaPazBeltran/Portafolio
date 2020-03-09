import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../App.css'
const MyNavbar = () =>{
    return(
        <Navbar bg="dark">
            <div className='linksNavbar'>
                <li>
                    <ol><Link to='/'>About Me</Link></ol>
                    <ol><Link to='/skills'>Skills</Link></ol>
                    <ol><Link to='/projects'>Projects</Link></ol>
                    <ol><Link to='/contacts'>Contacts</Link></ol>

                </li>
            </div>
        </Navbar>
    )
}
export default MyNavbar

