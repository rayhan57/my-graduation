import React from "react";
import { Image, Modal } from "react-bootstrap";
import styles from "../page.module.css";

const ModalImage = ({ show, setShow, item }) => {
  return (
    <>
      <Modal
        className={styles.myModal}
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Body>
          <Image src={item.url} alt={item.name} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalImage;
