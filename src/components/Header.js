import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <style type='text/css'>
      {`
    .navbar {
      background-color: #daddd7;
    } 
      `}  
    </style>
    {/* <Navbar className="bg-body-tertiary"> */}
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home"><h1>Family Restaurant</h1></Navbar.Brand>
      </Container>
    </Navbar>
   </>
  );
}

export default Header;