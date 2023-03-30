import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import priceCalculator from "../utilities/priceCaluclator";

function ProductDetails(props) {
  const {
    cartItems,
    getCartQuantity,
    increaseProductQuantity,
    decreaseProductQuantity,
    updateCartItemCount,
  } = useShoppingCart();
  useEffect(() => {
    console.log(cartItems);
  }, []);
  return (
    <Container className="d-flex flex-column justify-content-between productCardShadow">
      <Row id={props.id}>
        <Col className="col-lg-2">
          <img className="productImage" src={props.img} />
        </Col>
        <Col className="mt-3 col-lg-2">
          <Row className="productName">
            <p>{props.name}</p>
          </Row>
          <Row className="text-muted">
            <p>{"Product-code ©: " + props.id}</p>
          </Row>
        </Col>
        <Col className="d-flex justify-content-around col-lg-3">
          <Row className="align-items-center">
            <Col xs={4}>
              <button
                onClick={() => decreaseProductQuantity(props.id)}
                className="redBgColor"
              >
                -
              </button>
            </Col>
            <Col xs={4} className="text-center">
              {props.quantity}
            </Col>
            <Col xs={4} className="text-right">
              <button
                onClick={() => increaseProductQuantity(props.id)}
                className="greenBgColor"
              >
                +
              </button>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex">
          <Row className="align-items-center">
            <Col xs={6} className="text-muted text-center">
              {priceCalculator(props.price, props.quantity)}
            </Col>
          </Row>
        </Col>
        <Col className="d-flex">
          <Row className="align-items-center">
            <Col xs={6} className="text-center">
              <button className="close-button">X</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default ProductDetails;
