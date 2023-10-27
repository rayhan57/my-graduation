"use client";
import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import styles from "../page.module.css";
import ModalImage from "./ModalImage";

const MyCards = ({ data }) => {
  const [show, setShow] = useState(false);
  const [modalImageItem, setModalImageItem] = useState("");

  const handleImageClick = (item) => {
    setModalImageItem(item);
    setShow(true);
  };

  return (
    <>
      {data.map((item, index) => (
        <Col key={index} md={4} xs={5} className="mb-4">
          <Card className={`h-100 rounded-0 ${styles.myCard}`}>
            <Card.Img
              variant="top"
              src={item.url}
              className="rounded-0"
              onClick={() => handleImageClick(item)}
            />
          </Card>
        </Col>
      ))}
      {show && (
        <ModalImage show={show} setShow={setShow} item={modalImageItem} />
      )}
    </>
  );
};

export default MyCards;
