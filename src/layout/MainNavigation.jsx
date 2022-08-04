import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {Link} from "react-router-dom";

import classes from "./MainNavigation.module.css";


const MainNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>CryptoApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className={classes.link} to="/">All Cryptos</Link></Nav.Link>
            <Nav.Link><Link className={classes.link} to="/top-performer">Top Performers</Link></Nav.Link>
            <Nav.Link><Link className={classes.link} to="/buyings">Your Buying</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default MainNavigation