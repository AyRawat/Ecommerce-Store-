import priceCalculator from "./priceCaluclator";
function subTotalCalculator(products, cartItems) {
  //   console.log(
  //     "The Value of Products from inside SubTotalCalc, ",
  //     products,
  //     "The Value of CartITems from Cart",
  //     cartItems
  //   );
  let totalValue = 0;
  if (cartItems.length == 0) return totalValue;
  products.map((prod) => {
    let target = cartItems.find((item) => item.id === prod.id);
    if (target) {
      totalValue += priceCalculator(prod.price, target.quantity);
    }
  });
  console.log("The Total Value", totalValue);
  return totalValue;
}

export default subTotalCalculator;
