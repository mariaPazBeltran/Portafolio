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
        {name: 'María Paz Beltrán', logo: linkedin, url:'https://www.linkedin.com/in/mariapazbeltran/'},
        {name: 'mariaPazBeltran', logo: github, url:'https://github.com/mariaPazBeltran'},
        {name: 'mariabeltra.98@gmail.com', logo: gmail, url:'mariabeltra.98@gmail.com'}
    ],
    projects:[
        {   project:'Data Lovers', 
            code:'https://github.com/mariaPazBeltran/SCL011-data-lovers', 
            deploy:'https://mariapazbeltran.github.io/SCL011-data-lovers/src/index.html',
            image:lovers, 
            description:'Cada día se generan 2.5 trillones de bytes de datos. No obstante,  los datos por sí mismos son de poca utilidad. Por eso se crean  interfaces que permiten hacer de estos una lectura fácil para los  usuarios. Con esto en cuenta, se construyó una página web que  visualiza con conjunto de datos que se adecua a lo que nuestro  usuario objetivo necesita'
        },
        {   project:'Burger Queen',
            code:'https://github.com/mariaPazBeltran/SCL011-Burger-Queen', 
            deploy:'https://burger-queen-2dc5a.firebaseapp.com/', 
            image:burger, 
            description:'Un pequeño restaurante de Hamburguesas, que está creciendo,  necesita una interfaz en la que puedan tomar pedidos usando una  tablet, y enviarlos a la cocina para que se preparen ordenada y  eficientemente.  '
        },
        
        {   project:'Burger Queen',
            code:'https://github.com/mariaPazBeltran/SCL011-Burger-Queen', 
            deploy:'https://burger-queen-2dc5a.firebaseapp.com/', 
            image:burger, 
            description:'Un pequeño restaurante de Hamburguesas, que está creciendo,  necesita una interfaz en la que puedan tomar pedidos usando una  tablet, y enviarlos a la cocina para que se preparen ordenada y  eficientemente.  '
        }
    ]
}
export default InitialState