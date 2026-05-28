```javascript
console.log("Excel Game Showcase Loaded");


/* NAVBAR SHADOW ON SCROLL */

const navbar = document.querySelector(".navbar");

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
