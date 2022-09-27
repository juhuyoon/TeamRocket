fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // Will be usd to pull data in the future
    return data;
  });
