import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

function HeadBar(props) {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">STORE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">ABOUT</Nav.Link>
      </Nav.Item>

      <Button  onClick={props.onShow} variant="outline-primary">CART</Button>
    </Nav>
  );
}

export default HeadBar;