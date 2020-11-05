// JS FOR SIDEBAR TOGGLE 

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("#navbar");
const main = document.querySelector("#main-doc");
let toggle = 0;

hamburger.addEventListener("click", () => {
    if(toggle === 0){
        navbar.style.transform = `translateX(${toggle})`; 
        toggle = 150;
        main.addEventListener("click", () => {
            navbar.style.transform = `translateX(-${toggle}%)`;
            toggle = 0;
        })
    } else {
        navbar.style.transform = `translateX(-${toggle}%)`;
        toggle = 0;
    }
});