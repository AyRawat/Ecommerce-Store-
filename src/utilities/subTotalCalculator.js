import priceCalculator from "./priceCaluclator";
function subTotalCalculator(products, cartItems) {
  let totalValue = 0;
  if (cartItems.length == 0) return totalValue;
  products.map((prod) => {
    let target = cartItems.find((item) => item.id === prod.id);
    if (target) {
      totalValue += priceCalculator(prod.price, target.quantity);
    }
  });
  return totalValue;
}

export default subTotalCalculator;
