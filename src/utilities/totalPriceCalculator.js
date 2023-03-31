import priceCalculator from "./priceCaluclator";

function totalPriceCalculator(products, discount, cartItems) {
  let totalPrice = 0;
  products.map((product) => {
    let target = cartItems.find((item) => item.id === product.id);
    if (target) {
      totalPrice += priceCalculator(product.price, target.quantity);
    }
  });
  return (totalPrice -= discount);
}

export default totalPriceCalculator;
