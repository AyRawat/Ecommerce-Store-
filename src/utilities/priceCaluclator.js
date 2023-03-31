//If Flag is true, then it returns final Value with String attached
function priceCalculator(price, quantity) {
  //This removes the currency.
  console.log("Banana Issue", price, quantity);
  let num = parseFloat(price?.match(/[-+]?(?:\d*\.*\d+)/)[0]);
  console.log(
    "Value from Price Calculator",
    "£" + num * quantity,
    "After Parsing",
    num,
    "INput",
    price,
    "Quantity",
    quantity
  );
  return num * quantity;
}

export default priceCalculator;
