let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "speed"],
  },
  {
    name: "Ivysaur",
    height: 1,
    types: ["water", "speed"],
  },
  {
    name: "Venusaur",
    height: 2.2,
    types: ["poison", "scary"],
  },
  {
    name: "Charmander",
    height: 0.6,
    types: ["fire"],
  },
  {
    name: "Charmeleon",
    height: 1.1,
    types: ["flying"],
  },
  {
    name: "Charizard",
    height: 1.7,
    types: ["electric", "speed"],
  },
];

for (let i = 0; i < pokemonList.length; i++) {
    // lists pokemon names and heights
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ")
    // highlights pokemon larger than 1.5
    if (pokemonList[i].height > 1.5) {
        document.write(" - Wow, that's big! ")
    }
    document.write("<br/>")
}

//console.log(pokemonList.length)

/* for (let i = 0; i < pokemonList.length; i++) {
  let size;
  if (pokemonList[i].height > 2) {
    size = "Wow, that's big!";
  } else if (pokemonList[i].height < 2 && pokemonList[i].height > 1) {
    size = "This is an average Pokemon.";
  } else {
    size = "This is a small Pokemon.";
  }

  let color;
  for (let k = 0; k < pokemonList[i].types.length; k++) {
    if (pokemonList[i].types[k] == "grass") {
      color = '<span style="color: green;">';
    } else if (pokemonList[i].types[k] == "fire") {
      color = '<span style="color: red;">';
    } else if (pokemonList[i].types[k] == "poison") {
      color = '<span style="color: purple;">';
    } else if (pokemonList[i].types[k] == "electric") {
      color = '<span style="color: yellow;">';
    } else if (pokemonList[i].types[k] == "flying") {
      color = '<span style="color: lightblue;">';
    } else if (pokemonList[i].types[k] == "water") {
      color = '<span style="color: blue;">';
    }
  }
  document.write(
    '<div class="box">' +
      pokemonList[i].name +
      " (height: " +
      pokemonList[i].height +
      ") " +
      size +
      color +
      "</br>" +
      pokemonList[i].types +
      "<br/>" +
      "</div>"
  );
} */
