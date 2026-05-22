console.log("Games page loaded");
const trailers = {
    storm3: "https://www.youtube.com/embed/8v6h9Y6kG1A",
    fifa22: "https://www.youtube.com/embed/o1igaMv46SY",
    watchdogs1: "https://www.youtube.com/embed/8D9gQ5G6v5k"
};

// Example for Storm 3 page
document.getElementById("trailerFrame").src = trailers.storm3;
function searchGames() {

    let input = document.getElementById("searchInput").value.toLowerCase();
    let games = document.querySelectorAll(".game-card");

    games.forEach(game => {

        let title = game.querySelector("h2").innerText.toLowerCase();

        if (title.includes(input)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }

    });
}

function filterGames(category) {

    let games = document.querySelectorAll(".game-card");

    games.forEach(game => {

        if (category === "all") {
            game.style.display = "block";
        }
        else if (game.classList.contains(category)) {
            game.style.display = "block";
        }
        else {
            game.style.display = "none";
        }

    });
}