function priceCalculator(price, quantity) {
  //This removes the currency.
  let num = parseFloat(price?.match(/\d+\.\d+/)[0]);
  console.log("Value from Price Calculator", "£" + num * quantity);
  return "£" + num * quantity;
}

export default priceCalculator;
