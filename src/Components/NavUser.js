import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const NavUser =({auth,setAuth})=>{
    return(
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link as={Link} to='/'>Home</Nav.Link>
            {
            auth ?
            <>
                <Nav.Link as={Link} to='/Users'>Users</Nav.Link>
                <Nav.Link onClick={()=> setAuth(false) }>Logout</Nav.Link>
            </>
            :
            <>
                <Nav.Link onClick={()=> setAuth(true)}>Login</Nav.Link>
            </>
           }
          </Nav>
        </Container>
      </Navbar>
     </div>
    )
}
export default NavUser