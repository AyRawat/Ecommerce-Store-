import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Button, Row, Col } from "react-bootstrap";
import fetchData from "../utilities/fetchData";
import "../App.css";

// async function fetchData(key) {
//   let response = await fetch(
//     `https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=${key}`
//   );
//   const json = await response.json();
//   return json;
// }

export default function Home() {
  const [data, setData] = useState([]);
  let key = "all";
  useEffect(() => {
    async function fetchED() {
      let response = await fetchData(key);
      setData(response);
    }
    fetchED();
    //setData(response);
  }, []);

  const handleButtonClick = async (key) => {
    let response = await fetchData(key);
    setData(response);
  };
  return (
    <Container>
      <Row md={4} xs={1} lg={3} className="g-3 mt-2 mb-4">
        <Col className="col-md-8 col-lg-12 d-flex justify-content-start">
          <Button
            className="mx-4 rounded-pill shadow-lg text-muted"
            onClick={() => handleButtonClick("all")}
            variant="outline-light"
          >
            All items
          </Button>
          <Button
            className="mx-4 rounded-pill shadow-lg text-muted"
            onClick={() => handleButtonClick("drinks")}
            variant="outline-light"
          >
            Drinks
          </Button>
          <Button
            className="mx-4 rounded-pill shadow-lg text-muted"
            onClick={() => handleButtonClick("fruit")}
            variant="outline-light"
          >
            Fruits
          </Button>
          <Button
            className="mx-4 rounded-pill shadow-lg text-muted"
            onClick={() => handleButtonClick("bakery")}
            variant="outline-light"
          >
            Bakery
          </Button>
        </Col>
      </Row>
      <Row>
        <h2>Trending Items</h2>
      </Row>
      <Row md={4} xs={1} lg={5}>
        {data.map((item) => (
          <Col md={4} xs={1} lg={5}>
            <ProductCard
              id={item.id}
              type={item.type}
              name={item.name}
              description={item.description.substring(0, 25) + "....."}
              img={item.img}
              price={item.price}
              quantity={item.available}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
