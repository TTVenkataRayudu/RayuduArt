import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../App';
import '../../src/App.css';
import './NavSection.scss';
export const NavSection = () => {
    let navigate = useNavigate();
    const navigateToHome = () => {
        navigate(RoutePaths.HOME)
    }
    const navigateToLogin = () => {
        navigate(RoutePaths.LOGIN)
    }
    const navigateToRegister = () => {
        navigate(RoutePaths.REGISTER)
    }
    const navigateToPaintingsPage = () => {
        navigate(RoutePaths.PAINTINGSPAGE)
    }
    const navigateToSketches = () => {
        navigate(RoutePaths.SKETCHESPAGE)
    }
    const navigateToImageUpload = () => {
        navigate(RoutePaths.IMAGEUPLOAD)
    }

    const navigateToExplore = () => {
        navigate(RoutePaths.EXPLORE)
    }
    return (
        <Navbar bg="light" expand="lg" >
            
            <Container>
                {/*<Navbar.Brand onClick={navigateToHome}>RayuduArtGallery</Navbar.Brand>*/}
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                <div className="nav-container">
                    <Navbar.Brand onClick={navigateToHome}>RayuduArtGallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
                            <Nav.Link onClick={navigateToSketches}>Artwork</Nav.Link>
                            <Nav.Link onClick={navigateToImageUpload}> ImageUpload</Nav.Link>
                            <Nav.Link onClick={navigateToExplore}> Explore</Nav.Link>
                            <Nav.Link onClick={navigateToLogin}>Login</Nav.Link>
                            <Nav.Link onClick={navigateToRegister}>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                   

               {/* </Navbar.Collapse>*/}
            </Container>
        </Navbar> 
  );
   
}