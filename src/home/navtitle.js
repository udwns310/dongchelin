import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navtitle() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" variant="dark" style={{ fontSize: '25px' }}>
                    <img alt="" src="./img/best3.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                    동슐랭 가이드
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navtitle;
