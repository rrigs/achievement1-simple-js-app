let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
  },
  {
    name: "Ivysaur",
    height: 1,
    types: ["grass", "poison"],
  },
  {
    name: "Venusaur",
    height: 2,
    types: ["grass", "poison"],
  },
  {
    name: "Charmander",
    height: 0.6,
    types: ["fire"],
  },
  {
    name: "Charmeleon",
    height: 1.1,
    types: ["fire"],
  },
  {
    name: "Charizard",
    height: 1.7,
    types: ["fire", "flying"],
  },
];

pokemonList.forEach(function (pokemon) {
  let size;
  if (pokemon.height > 1.5) {
    size = "Wow, that's big!";
  } else {
    size = "";
  }
  document.write(
    "<p>" +
      pokemon.name +
      " (height:" +
      pokemon.height +
      ") " +
      size +
      "<br>" +
      pokemon.types +
      "</p>" +
      "</br>"
  );
});
