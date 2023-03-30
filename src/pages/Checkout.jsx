import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ProductDetails from "../components/ProductDetail";
import storeItems from "../data/items.json";
import fetchData from "../utilities/fetchData";
import "./pages.css";

export default function Checkout() {
  const [data, setData] = useState([]);
  const { getAllCartItems, removeFromCart, getCartItemsId } = useShoppingCart();
  let key = "all";
  useEffect(() => {
    async function fetchED() {
      console.log("Getting All cart Items", getAllCartItems());
      let getAllItems = getAllCartItems();
      console.log("GET ALL ITEMS", getAllItems);
      let response = await fetchData(key);
      const map = new Map();
      for (const item of getAllItems) {
        map.set(item.id, item.quantity);
      }
      console.log(map);
      let itemList = [];
      for (let res of response) {
        if (map.has(res.id)) {
          itemList.push({
            ...res,
            quantity: map.get(res.id),
          });
        }
      }
      console.log("THe item list that you have created", itemList);
      setData(itemList);
    }
    fetchED();
    //setData(response);
  }, []);

  return (
    <Container>
      <Row>
        <h3>Checkout</h3>
      </Row>
      <Row>
        {data.map((item) => (
          <Row key={item.id} lg={1} md={1} sm={1}>
            <Col>
              <ProductDetails
                id={item?.id}
                name={item?.name}
                img={item?.img}
                price={item?.price}
                quantity={item?.quantity}
              />
            </Col>
          </Row>
        ))}
      </Row>
      <Row>
        <hr />
        <Row className="d-flex justify-content-center">
          <Col>
            <h5>Subtotal</h5>
          </Col>
          <Col>
            <p>Subtotal</p>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center">
          <Col>
            <h5>Subtotal</h5>
          </Col>
          <Col>
            <p>Subtotal</p>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-6">
            <h5>Subtotal</h5>
          </Col>
          <Col className="col-lg-3">
            <p>Subtotal</p>
          </Col>
          <Col className="col=lg-3">
            <Button className="greenBgColor" variant="none">
              Checkout
            </Button>
          </Col>
        </Row>
        <hr />
      </Row>
    </Container>
  );
}
