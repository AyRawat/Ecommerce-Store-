//If Flag is true, then it returns final Value with String attached
function priceCalculator(price, quantity) {
  //This removes the currency.
  let num = parseFloat(price?.match(/[-+]?(?:\d*\.*\d+)/)[0]);
  return num * quantity;
}

export default priceCalculator;
