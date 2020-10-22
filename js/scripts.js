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

function myLoopFunction(pokemon) {
/*   let size =" ";
  if (pokemonList.height > 1.5) {
    size = "Wow, that's big!";
  } */
  document.write(pokemon.name + ' (height:' + pokemon.height + ') ' + pokemon.types + "</br>")
}

pokemonList.forEach(myLoopFunction);