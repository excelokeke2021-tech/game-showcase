```javascript id="d8xwq3"
console.log("Games page loaded");


/* SEARCH FUNCTION */

function searchGames(){

    let input =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    let games =
    document.querySelectorAll(".game-card");

    games.forEach(game => {

        let title =
        game
        .querySelector("h2")
        .innerText
        .toLowerCase();

        if(title.includes(input)){

            game.style.display = "flex";
        }

        else{

            game.style.display = "none";
        }

    });

}


/* FILTER FUNCTION */

function filterGames(category){

    let games =
    document.querySelectorAll(".game-card");

    games.forEach(game => {

        if(category === "all"){

            game.style.display = "flex";
        }

        else if(
            game.classList.contains(category)
        ){

            game.style.display = "flex";
        }

        else{

            game.style.display = "none";
        }

    });

}


/* NAVBAR SHADOW */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.4)";
    }

    else{

        navbar.style.boxShadow = "none";
    }

});
```
