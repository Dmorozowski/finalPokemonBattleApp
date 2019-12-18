const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let url;
let urlz;

//SEARCH FORM
const searchChallenger = document.getElementById("searchChallenger");
const searchDefender = document.getElementById("searchDefender");
const searchFormChallenger = document.getElementById("formChallenger");
const searchFormDefender = document.getElementById("formDefender");
// const submitBtnChallenger = document.querySelector("submit");
// const submitBtnDefender = document.querySelector("submit");

//RESULTS SECTION
const sectionChallenger = document.getElementById("sectionChallenger");
const sectionDefender = document.getElementById("sectionDefender");

searchFormChallenger.addEventListener("submit", fetchResultsChallenger);

// Submit Event Function
function fetchResultsChallenger(e) {
  e.preventDefault();
  //Assemble the full URL
  url = baseURL + searchChallenger.value;

  console.log("URL:", url);

  fetch(url)
    .then(function(result) {
      return result.json();
    })
    .then(function(json) {
      // console.log(json);
      displayResultsChallenger(json);
    });

  function displayResultsChallenger(json) {
    console.log("Display Results", json);
    while (sectionChallenger.firstChild) {
      // console.log("works");
      sectionChallenger.removeChild(sectionChallenger.firstChild);
    }
    let pokemonChallenger = json;
    // console.log(pokemon);
    // console.log(json);

    if (searchChallenger.length === 0) {
      console.log("No results");
    } else {
      let formChallenger = document.createElement("form");
      formChallenger.setAttribute("class", "formChallenger");
      let headingChallenger = document.createElement("h2");
      headingChallenger.setAttribute("id", "headingChallenger");
      let imgChallenger = document.createElement("img");
      imgChallenger.setAttribute("id", "imgChallenger");
      let clearfixChallenger = document.createElement("div");
      let paraChallenger = document.createElement("para");
      paraChallenger.setAttribute("class", "movesChallenger");

      // console.log("Current:", json.species.name);

      headingChallenger.textContent = pokemonChallenger.species.name;
      console.log("Pokemon:", pokemonChallenger);

      if (pokemonChallenger.sprites.front_default.length > 0) {
        imgChallenger.src = pokemonChallenger.sprites.front_default;
        imgChallenger.alt = "Picture of the Pokemon";
      }

      paraChallenger.textContent = "Moves: ";

      for (let q = 0; q < 1; q++) {
        let spanChallenger = document.createElement("span");
        spanChallenger.setAttribute("class", "challengerMoves");
        spanChallenger.textContent +=
          pokemonChallenger.moves[0].move.name + ", ";
        spanChallenger.textContent +=
          pokemonChallenger.moves[3].move.name + ", ";
        spanChallenger.textContent +=
          pokemonChallenger.moves[8].move.name + ", ";
        spanChallenger.textContent +=
          pokemonChallenger.moves[11].move.name + " ";
        paraChallenger.appendChild(spanChallenger);
      }
      clearfixChallenger.setAttribute("class", "clearfixChallenger");

      formChallenger.appendChild(headingChallenger);
      formChallenger.appendChild(clearfixChallenger);
      formChallenger.appendChild(imgChallenger);
      formChallenger.appendChild(paraChallenger);
      sectionChallenger.appendChild(formChallenger);
    }

    searchFormDefender.addEventListener("submit", fetchResultsDefender);
    function fetchResultsDefender(e) {
      e.preventDefault();
      //Assemble the full URL
      urlz = baseURL + searchDefender.value;

      console.log("URL:", urlz);

      fetch(urlz)
        .then(function(result) {
          return result.json();
        })
        .then(function(json) {
          // console.log(json);
          displayResultsDefender(json);
        });

      function displayResultsDefender(json) {
        console.log("Display Results", json);
        while (sectionDefender.firstChild) {
          // console.log("works");
          sectionDefender.removeChild(sectionDefender.firstChild);
        }
        let pokemonDefender = json;
        // console.log(pokemon);
        // console.log(json);

        if (searchDefender.length === 0) {
          console.log("No results");
        } else {
          let formDefender = document.createElement("form");
          formDefender.setAttribute("class", "formDefender");
          let headingDefender = document.createElement("h2");
          headingDefender.setAttribute("id", "headingDefender");
          let imgDefender = document.createElement("img");
          imgDefender.setAttribute("id", "imgDefender");
          let clearfixDefender = document.createElement("div");
          let paraDefender = document.createElement("para");
          paraDefender.setAttribute("class", "movesDefender");

          // console.log("Current:", json.species.name);

          headingDefender.textContent = pokemonDefender.species.name;
          console.log("Pokemon:", pokemonDefender);

          if (pokemonDefender.sprites.back_default.length > 0) {
            imgDefender.src = pokemonDefender.sprites.back_default;
            imgDefender.alt = "Picture of my Pokemon";
          }

          paraDefender.textContent = "Moves: ";

          for (let j = 0; j < 1; j++) {
            let spanDefender = document.createElement("span");
            spanDefender.setAttribute("class", "defenderlMoves");
            spanDefender.textContent +=
              pokemonDefender.moves[0].move.name + ", ";
            spanDefender.textContent +=
              pokemonDefender.moves[3].move.name + ", ";
            spanDefender.textContent +=
              pokemonDefender.moves[8].move.name + ", ";
            spanDefender.textContent +=
              pokemonDefender.moves[11].move.name + " ";
            paraDefender.appendChild(spanDefender);
          }

          // console.log(
          //   `A few moves that ${pokemon.species.name} can learn are ${pokemon.moves[0].move.name}, ${pokemon.moves[3].move.name}, ${pokemon.moves[8].move.name}, and ${pokemon.moves[11].move.name}.`
          // );

          // if (json.sprites.front_default === true) {
          //   img.src = json.sprites.front_default;
          //   img.alt = current.pokemon.photo;
          // }
          clearfixDefender.setAttribute("class", "clearfixDefender");

          formDefender.appendChild(headingDefender);
          formDefender.appendChild(clearfixDefender);
          formDefender.appendChild(imgDefender);
          formDefender.appendChild(paraDefender);
          sectionDefender.appendChild(formDefender);
        }
      }
    }
  }
}
