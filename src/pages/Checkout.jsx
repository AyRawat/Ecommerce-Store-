import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ProductDetails from "../components/ProductDetail";
import storeItems from "../data/items.json";
import fetchData from "../utilities/fetchData";
import subTotalCalculator from "../utilities/subTotalCalculator";
import totalPriceCalculator from "../utilities/totalPriceCalculator";

import "./pages.css";

export default function Checkout() {
  const [data, setData] = useState([]);
  const { cartItems, discountPriceCalculator } = useShoppingCart();
  let key = "all";
  useEffect(() => {
    async function fetchAllData() {
      let response = await fetchData(key);
      setData(response);
    }
    fetchAllData();
  }, []);

  return (
    <Container>
      <Row>
        <h3>Checkout</h3>
      </Row>
      <Row>
        {data.map((item) => {
          if (cartItems.find((cart) => cart.id === item.id)) {
            return (
              <Row key={item.id} lg={1} md={1} sm={1}>
                <Col>
                  <ProductDetails
                    id={item?.id}
                    name={item?.name}
                    img={item?.img}
                    price={item?.price}
                  />
                </Col>
              </Row>
            );
          }
        })}
      </Row>
      <Row className="d-flex">
        <hr />
        <Row className="align-right">
          <Col className="col-lg-6 text-center">
            <h5>Subtotal</h5>
          </Col>
          <Col>
            <p>{"£" + subTotalCalculator(data, cartItems)}</p>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-6 text-center">
            <h5>Discount</h5>
          </Col>
          <Col>
            <p>{"£" + discountPriceCalculator()}</p>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-6 text-center">
            <h5>Total</h5>
          </Col>
          <Col className="col-lg-3">
            <p>
              {"£" +
                totalPriceCalculator(
                  data,
                  discountPriceCalculator(),
                  cartItems
                )}
            </p>
          </Col>
          <Col className="col=lg-3">
            <button className="greenBgColor">Checkout</button>
          </Col>
        </Row>
        <hr />
      </Row>
    </Container>
  );
}
