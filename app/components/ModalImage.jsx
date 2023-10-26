import React from "react";
import { Image, Modal } from "react-bootstrap";

const ModalImage = ({ show, setShow, image }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body>
          <Image src={image} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalImage;
