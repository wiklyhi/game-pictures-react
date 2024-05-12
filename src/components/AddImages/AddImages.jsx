import "./addimages.css";
import { Col, Image } from "react-bootstrap";

export default function AddImages({ name, src, clickImages }) {
  return (
    <>
      <Col xs={6} md={2}>
        <div className="bg">
          <Image
            title={name}
            name={name}
            src={src}
            onClick={clickImages}
            style={{ opacity: 1 }}
            className="imagesControl"
            rounded
          />
        </div>
      </Col>
    </>
  );
}
