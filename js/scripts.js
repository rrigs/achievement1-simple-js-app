let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContainer = document.querySelector("#modal-container");

  function getAll(pokemon) {
    return pokemonList;
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      alert("Please enter valid Pokemon.");
    }
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let li = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");

    li.appendChild(button);
    pokemonList.appendChild(li);

    //opens modal when pokemon button is clicked
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showModal(pokemon) {
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", hideModal);

    let name = document.createElement("h1");
    name.innerText = pokemon.name;

    let image = document.createElement("img");
    image.classList.add("modal-img");
    image.setAttribute("src", pokemon.imageUrl);

    let imageAnimated = document.createElement("img");
    imageAnimated.classList.add("modal-img-animated");
    imageAnimated.setAttribute("src", pokemon.imageUrlAnimated);

    let height = document.createElement("p");
    height.innerText = "Height: " + pokemon.height;

    let types = document.createElement("p");
    types.innerText = "Types: " + pokemon.types;

    let abilities = document.createElement("p");
    abilities.innerText = "Abilities: " + pokemon.abilities;

    modalContainer.appendChild(modal);
    modal.appendChild(closeButton);
    modal.appendChild(name);
    modal.appendChild(image);
    modal.appendChild(imageAnimated);
    modal.appendChild(height);
    modal.appendChild(types);
    modal.appendChild(abilities);

    modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  //hides modal when ESC is pressed on keyboard
  window.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      modalContainer.classList.contains("is-visible")
    ) {
      hideModal();
    }
  });
  
  modalContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  //loads pokemon API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        // console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.imageUrlAnimated = details.sprites.versions['generation-v']['black-white'].animated.front_default;
      item.height = details.height;
      item.types = [];
      details.types.forEach(function (itemType) {
        item.types.push(itemType.type.name)
      })

      item.abilities = [];
      details.abilities.forEach(function (itemAbility) {
        item.abilities.push(itemAbility.ability.name)
      })

    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function myFunction() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    button = li[i].getElementsByTagName("button")[0];
      txtValue = button.textContent || button.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}