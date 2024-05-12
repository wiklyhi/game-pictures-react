import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer className="fixed-bottom">
        <Container>
          <Row>
            <Col>
              <p className="text-muted">
                Images: <a href="https://icons8.com/">icons8.com</a> ©2020-2024
                Panicin Mihail
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
