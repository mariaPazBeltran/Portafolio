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
import gato from '../images/Tic-Tac-Toe.jpg'

const InitialState = {
    skills: [{img:reactBootstrap,
        name:'ReactBootstrap'}, 
    {img:css, name:'css3'},
    {img:firebase,name:'Firebase'},
    {img:html, name:'HTML5'},
    {img: js, name:'JavaScript'},
    {img:reactjs, name:'React'}],
    contacts: [
        { logo: linkedin, url:'https://www.linkedin.com/in/mariapazbeltran/'},
        { logo: github, url:'https://github.com/mariaPazBeltran'},
        {url: 'mailto:mariabeltra.98@gmail.com', logo: gmail}
    ],
    projects:[
        {   project:'Medieval Tic tac toe ',
            code:'https://github.com/mariaPazBeltran/SCL011-Tic-Tac-Toe', 
            deploy:'https://expo.io/@mary_peace/Tic-Tac-Toe', 
            image:gato, 
            description:'Tic-Tac-Toe es un juego entre dos jugadores que marcan los espacios de un tablero de 3×3 alternadamente. Esta vez en una app Nativa '
        },
        
        {   project:'Burger Queen',
            code:'https://github.com/mariaPazBeltran/SCL011-Burger-Queen', 
            deploy:'https://burger-queen-2dc5a.firebaseapp.com/', 
            image:burger, 
            description:'Un pequeño restaurante de Hamburguesas, necesita una interfaz en la que puedan tomar pedidos usando una  tablet, y enviarlos a la cocina.'
        },
        {   project:'Data Lovers', 
            code:'https://github.com/mariaPazBeltran/SCL011-data-lovers', 
            deploy:'https://mariapazbeltran.github.io/SCL011-data-lovers/src/index.html',
            image:lovers, 
            description:'Interfaz que lee, visualiza y analiza un conjunto de datos que se adecuan a los gustos y necesidades de un determinado usuario'
        }
        
      
    ]
}
export default InitialState