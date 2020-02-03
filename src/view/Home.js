import React, {Component } from 'react'
import '../App.css'
import ShowAll from './ShowAll'

class Home extends Component{
    render(){
        return(
            <div className="home_container">
                <div className="image_background"></div>
                <ShowAll/>
            </div>
        )
    }
}
export default Home