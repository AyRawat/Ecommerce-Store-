async function fetchData(key) {
  let response = await fetch(
    `https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=${key}`
  );
  const json = await response.json();
  return json;
}

export default fetchData;
