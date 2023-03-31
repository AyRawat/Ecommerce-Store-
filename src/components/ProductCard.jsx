import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Heart from "react-heart";
import "./Components.css";

function ProductCard(props) {
  const { addToCart, removeFromCart, updateWishList } = useShoppingCart();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Card id={props.id} border="light" className="boxShadow mb-10">
      <Row>
        <Container>
          <Row className="d-flex">
            <Col xs={4} md={4} lg={4} className="justify-content-center">
              <Card.Img
                className="d-block mx-auto ml-1 my-3 img-fluid rounded"
                src={props.img}
                height="100px"
              ></Card.Img>
            </Col>
            <Col xs={8} md={8} lg={8} className="justify-content-center">
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>

                {props.quantity >= 10 ? (
                  <span className="available-pill">Available</span>
                ) : (
                  <span className="unavailable-pill">
                    Only {props.quantity} left
                  </span>
                )}
                <Row>
                  <Col md={{ offset: 1 }}>
                    <Card.Text> {props.price}</Card.Text>
                  </Col>
                  <Col md={{ offset: 2 }}>
                    <div onClick={() => addToCart(props.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ width: "1.6rem" }}>
                      <Heart
                        isActive={active}
                        onClick={() => {
                          setActive(!active);
                          updateWishList(props.id);
                        }}
                        animationScale={1.25}
                        style={{ marginBottom: "1rem" }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Row>
    </Card>
  );
}

export default ProductCard;
