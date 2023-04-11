import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../App';
export const NavSection = () => {
    let navigate = useNavigate();
    const navigateToHome = () => {
        navigate(RoutePaths.HOME)
    }
    const navigateToLogin = () => {
        navigate(RoutePaths.LOGIN)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">RayuduArtGallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <a onClick={navigateToHome }>Home</a>
                        <Nav.Link href="#sketches">Sketches</Nav.Link>
                        <Nav.Link href="#paintings">Paintings</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <a onClick={navigateToLogin }>Login</a>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
  );
   
}