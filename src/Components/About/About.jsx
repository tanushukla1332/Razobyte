import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function About(){
    return(
        <>

        <Container fluid>
        <Row>
          <Col md={6}>
            {/* Content for the first column */}
            <p>Main Column 1 Content</p>
            <Row>
              {/* Nested columns within the first column */}
              <Col md={4}>
                {/* Content for the first nested column */}
                <p>Nested Column 1.1</p>
              </Col>
              <Col md={4}>
                {/* Content for the second nested column */}
                <p>Nested Column 1.2</p>
              </Col>
              <Col md={4}>
                {/* Content for the third nested column */}
                <p>Nested Column 1.3</p>
              </Col>
            </Row>
          </Col>
          
          {/* Repeat the above structure for the second main column */}
          <Col md={6}>
            {/* Content for the second main column */}
            <p>Main Column 2 Content</p>
            <Row>
              {/* Nested columns within the second column */}
              <Col md={6}>
                {/* Content for the first nested column */}
                <p>Nested Column 2.1</p>
              </Col>
              <Col md={6}>
                {/* Content for the second nested column */}
                <p>Nested Column 2.2</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
       
        </>
    )
}