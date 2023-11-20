import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './NavbarApp.css';

export const NavbarApp = () => {
    return (
        <Navbar expand="lg" bg='dark' data-bs-theme='dark' className="bg-body-tertiary navbar-app">
            
                <Navbar.Brand href="/home">WC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll >
                        <Nav.Link href="/procurar">Procurar</Nav.Link>                                                               
                    </Nav>                      
                    <Nav className="my-2 my-lg-0" > 
                        <NavDropdown title="Usuário" id="navUsuario" className='nav-link-color' >
                            <NavDropdown.Item href="/opcoes">Opções</NavDropdown.Item>
                            <NavDropdown.Item href="/conta">Minha conta</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/" className='nav-link-color-red' >Sair</NavDropdown.Item>
                        </NavDropdown>                    
                    </Nav>            
                </Navbar.Collapse>
            
        </Navbar>
    );
}