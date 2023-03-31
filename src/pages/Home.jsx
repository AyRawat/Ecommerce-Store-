import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Button, Row, Col } from "react-bootstrap";
import fetchData from "../utilities/fetchData";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/items.json";
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
  const { searchResults } = useShoppingCart();
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
      <Row md={1} lg={2} className="g-3 mt-2 mb-4">
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
      {searchResults.length == 0 ? (
        <Row className="d-flex">
          {data.map((item) => (
            <Col xs={12} md={6} sm={12} lg={6}>
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
      ) : (
        <Row className="d-flex">
          {searchResults.map((item) => (
            <Col xs={12} md={6} sm={12} lg={6}>
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
      )}
      {/* <Row className="d-flex">
        {data.map((item) => (
          <Col>
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
      </Row> */}
    </Container>
  );
}
