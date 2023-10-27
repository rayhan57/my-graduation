import React from "react";
import { Image, Modal } from "react-bootstrap";

const ModalImage = ({ show, setShow, item }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body>
          <Image src={item.url} alt={item.name} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalImage;
