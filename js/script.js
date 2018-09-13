let gaucheListe = document.querySelector(".gaucheListe");
let menu = document.querySelector(".menu");
let about = document.querySelector(".about");
let date = document.querySelector(".date");
let formation = document.querySelector(".formation");
const tabFormation = [];
//window.test = undefined;
//Evenement au moment d'un survol souris
gaucheListe.onmouseover = function(){
    //window.test= alert("ok");
    about.innerHTML= "";
    menu.classList.add("animated");
    menu.classList.add("bounceInLeft");
    menu.classList.add("slower");
};
//Evenement au moment o`u on quitte le survol souris
gaucheListe.onmouseout = function(){
    menu.classList.remove("animated");
    menu.classList.remove("bounceInLeft");
    about.innerHTML= "About me";
};

date.onclick = function(){
    //formation.style.display = "none";
};