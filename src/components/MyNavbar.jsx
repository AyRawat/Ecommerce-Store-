import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const MyNavbar = () => {
  const { getCartQuantity, getWishListCount } = useShoppingCart();
  return (
    <Navbar sticky="top" bg="light" className="mb-3 mt-3 shadow-sm">
      <Container>
        <div className="col-lg-2">
          <Nav.Link to="/" as={NavLink}>
            <h3 className="groceryHeading">Groceries</h3>
          </Nav.Link>
        </div>
        <div className="col-lg-6">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 rounded-pill searchBoxShadow"
              aria-label="Search"
            ></FormControl>
          </Form>
        </div>
        <div className="col-lg-1">
          <Button
            style={{
              width: "4rem",
              height: "4rem",
              position: "relative",
              border: "none",
            }}
            variant="outline-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="heart"
            >
              <path
                fill="#d85b53"
                d="M6.28001656,3.46389584e-14 C6.91001656,0.0191596721 7.52001656,0.129159672 8.11101656,0.330159672 L8.11101656,0.330159672 L8.17001656,0.330159672 C8.21001656,0.349159672 8.24001656,0.370159672 8.26001656,0.389159672 C8.48101656,0.460159672 8.69001656,0.540159672 8.89001656,0.650159672 L8.89001656,0.650159672 L9.27001656,0.820159672 C9.42001656,0.900159672 9.60001656,1.04915967 9.70001656,1.11015967 C9.80001656,1.16915967 9.91001656,1.23015967 10.0000166,1.29915967 C11.1110166,0.450159672 12.4600166,-0.00984032788 13.8500166,3.46389584e-14 C14.4810166,3.46389584e-14 15.1110166,0.0891596721 15.7100166,0.290159672 C19.4010166,1.49015967 20.7310166,5.54015967 19.6200166,9.08015967 C18.9900166,10.8891597 17.9600166,12.5401597 16.6110166,13.8891597 C14.6800166,15.7591597 12.5610166,17.4191597 10.2800166,18.8491597 L10.2800166,18.8491597 L10.0300166,19.0001597 L9.77001656,18.8391597 C7.48101656,17.4191597 5.35001656,15.7591597 3.40101656,13.8791597 C2.06101656,12.5301597 1.03001656,10.8891597 0.390016562,9.08015967 C-0.739983438,5.54015967 0.590016562,1.49015967 4.32101656,0.269159672 C4.61101656,0.169159672 4.91001656,0.0991596721 5.21001656,0.0601596721 L5.21001656,0.0601596721 L5.33001656,0.0601596721 C5.61101656,0.0191596721 5.89001656,3.46389584e-14 6.17001656,3.46389584e-14 L6.17001656,3.46389584e-14 Z M15.1900166,3.16015967 C14.7800166,3.01915967 14.3300166,3.24015967 14.1800166,3.66015967 C14.0400166,4.08015967 14.2600166,4.54015967 14.6800166,4.68915967 C15.3210166,4.92915967 15.7500166,5.56015967 15.7500166,6.25915967 L15.7500166,6.25915967 L15.7500166,6.29015967 C15.7310166,6.51915967 15.8000166,6.74015967 15.9400166,6.91015967 C16.0800166,7.08015967 16.2900166,7.17915967 16.5100166,7.20015967 C16.9200166,7.18915967 17.2700166,6.86015967 17.3000166,6.43915967 L17.3000166,6.43915967 L17.3000166,6.32015967 C17.3300166,4.91915967 16.4810166,3.65015967 15.1900166,3.16015967 Z"
                transform="translate(2 2.5)"
                className="color200e32 svgShape"
              ></path>
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center aligh-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(30%, -175%)",
              }}
            >
              {getWishListCount()}
            </div>
          </Button>
        </div>
        <div className="col-lg-1">
          <Button
            style={{
              width: "4rem",
              height: "4rem",
              position: "relative",
              border: "none",
            }}
            variant="outline-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 61.8 66.358"
              id="Avatar"
            >
              <defs>
                <clipPath id="a">
                  <path
                    fill="none"
                    d="M53.456 52.022A30.766 30.766 0 0 1 30.9 61.829a31.163 31.163 0 0 1-3.833-.237 34.01 34.01 0 0 1-11.15-3.644 31.007 31.007 0 0 1-7.849-6.225l1.282-3.1 13.91-6.212c.625 3.723 7.806 8.175 7.806 8.175s7.213-3.412 8.087-8.211l12.777 6.281z"
                    clipRule="evenodd"
                  ></path>
                </clipPath>
                <clipPath id="b">
                  <path
                    fill="none"
                    d="M14.112 46.496l6.814-3.042 10.209 13.978 10.328-13.938 5.949 2.831v20.033h-33.3V46.496z"
                    clipRule="evenodd"
                  ></path>
                </clipPath>
              </defs>
              <g
                data-name="Layer 2"
                fill="#000000"
                className="color000000 svgShape"
              >
                <g
                  data-name="—ÎÓÈ 1"
                  fill="#000000"
                  className="color000000 svgShape"
                >
                  <circle
                    cx="30.9"
                    cy="30.9"
                    r="30.9"
                    fill="#3da5bc"
                    className="color3dbc93 svgShape"
                  ></circle>
                  <path
                    fill="#caf9a4"
                    fillRule="evenodd"
                    d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"
                    className="colorf9dca4 svgShape"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M39.165 38.778v3.58a7.783 7.783 0 0 1-.098 1.18 6.527 6.527 0 0 1-.395 1.405c-5.374 4.164-13.939.748-15.306-6.365z"
                    opacity=".11"
                    fill="#000000"
                    className="color000000 svgShape"
                  ></path>
                  <path
                    fill="#dbffbe"
                    fillRule="evenodd"
                    d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"
                    className="colorffe8be svgShape"
                  ></path>
                  <path
                    fill="#caf9a4"
                    fillRule="evenodd"
                    d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 01-1.472-7.659zM44.135 24.046c3.07 1.339.465 7.686-1.466 7.657a31.978 31.978 0 001.466-7.657z"
                    className="colorf9dca4 svgShape"
                  ></path>
                  <path
                    fill="#9ae45f"
                    fillRule="evenodd"
                    d="M44.123 24.17s7.96-11.785-2.636-16.334a11.881 11.881 0 0 0-12.87-5.22C22.775 3.805 20.604 6.7 20.604 6.7s-5.53 5.014-10.44 5.117a9.774 9.774 0 0 0 6.28 1.758c-.672 1.68-1.965 7.21 1.989 10.854 4.368-2.868 8.012-8.477 8.012-8.477s.982 3.257.207 4.86a18.879 18.879 0 0 0 7.922-3.531c2.542-2.036 3.893-4.297 5.31-4.326 3.256-.069 4.213 9.74 4.24 11.216z"
                    className="colorecbe6a svgShape"
                  ></path>
                  <path
                    fill="#49bfd9"
                    fillRule="evenodd"
                    d="M53.456 52.022A30.766 30.766 0 0 1 30.9 61.829a31.163 31.163 0 0 1-3.833-.237 34.01 34.01 0 0 1-11.15-3.644 31.007 31.007 0 0 1-7.849-6.225l1.282-3.1 13.91-6.212c.625 3.723 7.806 8.175 7.806 8.175s7.213-3.412 8.087-8.211l12.777 6.281z"
                    className="color498bd9 svgShape"
                  ></path>
                  <g
                    clipPath="url(#a)"
                    fill="#000000"
                    className="color000000 svgShape"
                  >
                    <path
                      fill="#d45985"
                      fillRule="evenodd"
                      d="M14.112 46.496l6.814-3.042 10.209 13.978 10.328-13.938 5.949 2.831v20.033h-33.3V46.496z"
                      className="color545f69 svgShape"
                    ></path>
                    <g
                      clipPath="url(#b)"
                      fill="#000000"
                      className="color000000 svgShape"
                    >
                      <path
                        fill="#554443"
                        fillRule="evenodd"
                        d="M37.79 42.881h.732v21.382h-.732V42.881zm-14.775 0h.731v21.382h-.73V42.881zm-2.981 0h.731v21.382h-.731V42.881zm-2.944 0h.731v21.382h-.73V42.881zm-2.981 0h.731v21.382h-.731V42.881zm20.708 0h.731v21.382h-.731V42.881zm-2.981 0h.731v21.382h-.731V42.881zm-2.944 0h.731v21.382h-.731V42.881zm-2.981 0h.731v21.382h-.731V42.881zm20.785 0h.732v21.382h-.732V42.881zm-2.98 0h.73v21.382h-.73V42.881zm-2.944 0h.73v21.382h-.73z"
                        className="color434955 svgShape"
                      ></path>
                    </g>
                  </g>
                  <path
                    fill="#26d7fe"
                    fillRule="evenodd"
                    d="M23.265 41.27l7.802 9.316-6.305 3.553-4.823-10.591 3.326-2.278zM39.155 41.45l-8.088 9.136 6.518 3.553 4.777-10.719-3.207-1.97z"
                    className="color58b0e0 svgShape"
                  ></path>
                  <path
                    fill="#d85b53"
                    fillRule="evenodd"
                    d="M21.637 23.157h6.416a1.58 1.58 0 011.119.464v.002a1.579 1.579 0 01.464 1.117v2.893a1.585 1.585 0 01-1.583 1.583h-6.416a1.578 1.578 0 01-1.116-.465h-.002a1.58 1.58 0 01-.464-1.118V24.74a1.579 1.579 0 01.464-1.117l.002-.002a1.578 1.578 0 011.116-.464zm6.416.85h-6.416a.735.735 0 00-.517.214l-.001.002a.735.735 0 00-.214.517v2.893a.73.73 0 00.215.517.735.735 0 00.517.215h6.416a.735.735 0 00.732-.732V24.74a.734.734 0 00-.214-.518.731.731 0 00-.518-.215zM34.548 23.157h6.416a1.58 1.58 0 011.118.464v.002a1.579 1.579 0 01.465 1.117v2.893a1.585 1.585 0 01-1.583 1.583h-6.416a1.58 1.58 0 01-1.117-.465l-.001-.002a1.58 1.58 0 01-.465-1.116V24.74a1.58 1.58 0 01.465-1.117l.002-.001a1.58 1.58 0 011.116-.465zm6.416.85h-6.416a.73.73 0 00-.517.214l-.001.002a.729.729 0 00-.214.517v2.893a.73.73 0 00.214.517l.001.001a.73.73 0 00.517.214h6.416a.735.735 0 00.732-.732V24.74a.734.734 0 00-.214-.518h-.001a.731.731 0 00-.517-.215z"
                    className="color464449 svgShape"
                  ></path>
                  <path
                    fill="#d85b53"
                    d="M29.415 24.506h3.845v.876h-3.845z"
                    className="color464449 svgShape"
                  ></path>
                </g>
              </g>
            </svg>
          </Button>
        </div>
        <div className="col-lg-1">
          <Nav.Link to="/Checkout" as={NavLink}>
            <Button
              style={{
                width: "4rem",
                height: "4rem",
                position: "relative",
                border: "none",
              }}
              variant="outline-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                id="cart"
              >
                <path
                  fill="#010101"
                  d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z"
                ></path>
              </svg>
              <div
                className="rounded-circle bg-primary d-flex justify-content-center aligh-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(30%, -175%)",
                }}
              >
                {getCartQuantity()}
              </div>
            </Button>
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
