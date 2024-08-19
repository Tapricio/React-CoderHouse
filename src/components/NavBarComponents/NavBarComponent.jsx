import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from "../CartWidgetComponents/CartWidgetComponent";
import {Link} from "react-router-dom"
import { getAllCategories } from "../../services/products";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([])

  React.useEffect(()=>{
    getAllCategories().then((res)=>{
      setCategories(res.data)
    }).catch((error)=>{
      console.error(error)
    })
  },[]
  )
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
          <Container >
            <Navbar.Brand><Link to="/" style={{color: "white", textDecoration: "none"}}>PatStore</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link><Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link></Nav.Link>
                
                <NavDropdown title="Categorias" id="basic-nav-dropdown" >
                  {categories.map((category) => {
                    return (
                      <NavDropdown.Item key={category.slug}>
                        <Link to={`/category/${category.slug}`}>{category.name}</Link>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                
              </Nav>
              
            </Navbar.Collapse>
            {/* test */}
            <Nav.Link><Link to="/PaginaPrueba">test</Link></Nav.Link>
            <Nav.Link><Link to="/Tarea">Tarea</Link></Nav.Link>
            <CartWidgetComponent />
            
          </Container>
        </Navbar>

        </>
    )
}

export default NavBarComponent
