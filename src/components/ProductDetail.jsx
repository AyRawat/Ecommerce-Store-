import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import priceCalculator from "../utilities/priceCaluclator";

function ProductDetails(props) {
  const {
    cartItems,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeFromCart,
  } = useShoppingCart();

  const getIdQuantity = (id) => {
    const obj = cartItems.find((item) => item.id === id);
    return obj ? obj.quantity : null;
  };
  useEffect(() => {
    console.log("These are the cart Items", props);
  }, [cartItems]);
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
          <Row className="text-muted text-truncate">
            <p>{"Product-code ©: " + props.id}</p>
          </Row>
        </Col>
        <Col className="d-flex justify-content-around col-lg-3">
          <Row className="align-items-center">
            <Col xs={4}>
              <button
                onClick={() => {
                  if (props.id === 532 && getIdQuantity(props.id) == 3) {
                    decreaseProductQuantity(641);
                  }
                  decreaseProductQuantity(props.id);
                }}
                className="redBgColor"
              >
                -
              </button>
            </Col>
            <Col xs={4} className="text-center">
              {getIdQuantity(props.id)}
            </Col>
            <Col xs={4} className="text-right">
              <button
                onClick={() => {
                  if (props.id === 532 && getIdQuantity(props.id) == 2) {
                    increaseProductQuantity(641);
                  }
                  increaseProductQuantity(props.id);
                }}
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
              {"£" + priceCalculator(props.price, getIdQuantity(props.id))}
            </Col>
          </Row>
        </Col>
        <Col className="d-flex">
          <Row className="align-items-center">
            <Col xs={6} className="text-center">
              <button
                onClick={() => {
                  removeFromCart(props.id);
                }}
                className="close-button"
              >
                X
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default ProductDetails;
