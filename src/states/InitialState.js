//logos skills
import reactBootstrap from '../images/skills/bootstrap.svg'
import css from '../images/skills/css3-skill.png'
import firebase from '../images/skills/firebase-skill.png'
import html from '../images/skills/html5-skill.png'
import js from '../images/skills/javascript-skill.png'
import reactjs from '../images/skills/react-skill.png'
//logos contacts
import github from '../images/contacts/github.png'
import gmail from '../images/contacts/gmail.png'
import linkedin from '../images/contacts/linkedin.png'
// img projects
import burger from '../images/burger.PNG'
import lovers from '../images/lovers.PNG'
const InitialState = {
    skills: [reactBootstrap, css, firebase, html, js, reactjs],
    contacts: [
        { logo: linkedin, url:'https://www.linkedin.com/in/mariapazbeltran/'},
        { logo: github, url:'https://github.com/mariaPazBeltran'},
        {name: 'mariabeltra.98@gmail.com', logo: gmail}
    ],
    projects:[
        {   project:'Data Lovers', 
            code:'https://github.com/mariaPazBeltran/SCL011-data-lovers', 
            deploy:'https://mariapazbeltran.github.io/SCL011-data-lovers/src/index.html',
            image:lovers, 
            description:'Interfaz que lee, visualiza y analiza un conjunto de datos que se adecuan a los gustos y necesidades de un determinado usuario'
        },
        {   project:'Burger Queen',
            code:'https://github.com/mariaPazBeltran/SCL011-Burger-Queen', 
            deploy:'https://burger-queen-2dc5a.firebaseapp.com/', 
            image:burger, 
            description:'Un pequeño restaurante de Hamburguesas, necesita una interfaz en la que puedan tomar pedidos usando una  tablet, y enviarlos a la cocina.'
        },
        
        /*{   project:'Burger Queen',
            code:'https://github.com/mariaPazBeltran/SCL011-Burger-Queen', 
            deploy:'https://burger-queen-2dc5a.firebaseapp.com/', 
            image:burger, 
            description:'Un pequeño restaurante de Hamburguesas, que está creciendo, necesita una interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente.'
        }*/
    ]
}
export default InitialState