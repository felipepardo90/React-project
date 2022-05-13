import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import "./_Footer.scss"



const navlinks = [
    { category: "Pastelería", toRoute: "/category/pies", id: 1 },
    { category: "Paletas", toRoute: "/category/popsicles", id: 2 },
    { category: "Variedades", toRoute: "/category/varieties", id: 3 },
    { category: "Nosotros", toRoute: "/category/about-us", id: 4 },
  ];
  
const Footer = () => {
  return (
      <div >
          
    <footer className="footer">
        <div className="social">

        
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://www.instagram.com/alf.paletas/"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube}/></a>
        </div>

        <ul className="list">
        {navlinks.map((nav) => (
                <li key={nav.id}>
                  <Link to={nav.toRoute} >
                    {nav.category}
                  </Link>
                </li>
              ))}
        </ul>
        <p className="copyright">
            Proyecto E-commerce React-CODERHOUSE @by Felipe Pardo
        </p>
    </footer>
      </div>
  )
}

export default Footer