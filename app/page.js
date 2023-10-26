import { Container, Row } from "react-bootstrap";
import MyCards from "./components/MyCards";

export default async function Home() {
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(baseUrl);
  const result = await response.json();
  const data = result.data;

  return (
    <>
      <Container className="mt-4">
        <Row>
          <h1 className="text-center text-uppercase">Graduation</h1>
        </Row>

        <Row className="mt-4">
          <p className="mb-0 small">
            <i className="fa-solid fa-calendar-days"></i> Selasa, 17 Oktober
            2023
          </p>
          <p className="small">
            <i className="fa-solid fa-location-dot"></i> Gedung Sasono Utomo
            TMII
          </p>
        </Row>

        <Row className="d-flex justify-content-center">
          <MyCards data={data} />
        </Row>
      </Container>
    </>
  );
}
