    /* alerta o ventana emergente (pop-up), diciendo que está saliendo de nuestro sitio. */
let afa = document.querySelector(".afa");
let rfef = document.querySelector(".rfef");
let fifa = document.querySelector(".fifa");
let afc = document.querySelector(".afc");
let caf = document.querySelector(".caf");
let conmebol = document.querySelector(".conmebol");
let uefa = document.querySelector(".uefa");
let ofc = document.querySelector(".ofc");
let facebook = document.querySelector(".fa-facebook-square")
let instagram = document.querySelector(".fa-instagram-square")
let youtube = document.querySelector(".fa-youtube-square")
let twitter = document.querySelector(".fa-twitter-square")

afa.addEventListener("click", () => {
    afa = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (afa == true){
        location.href = "https://www.afa.com.ar/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
rfef.addEventListener("click", () => {
    rfef = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (rfef == true){
        location.href = "http://www.rfef.es/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
fifa.addEventListener("click", () => {
    fifa = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (fifa == true){
        location.href = "https://www.fifa.com/fifaplus/es/home";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
afc.addEventListener("click", () => {
    afc = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (afc == true){
        location.href = "https://www.the-afc.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
caf.addEventListener("click", () => {
    caf = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (caf == true){
        location.href = "https://www.cafonline.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
conmebol.addEventListener("click", () => {
    conmebol = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (conmebol == true){
        location.href = "https://www.conmebol.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
uefa.addEventListener("click", () => {
    uefa = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (uefa == true){
        location.href = "https://es.uefa.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
ofc.addEventListener("click", () => {
    ofc = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (ofc == true){
        location.href = "https://www.oceaniafootball.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
facebook.addEventListener("click", () => {
    facebook = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (facebook == true){
        location.href = "https://www.facebook.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
instagram.addEventListener("click", () => {
    instagram = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (instagram == true){
        location.href = "https://www.instagram.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
youtube.addEventListener("click", () => {
    youtube = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (youtube == true){
        location.href = "https://www.youtube.com/";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});
twitter.addEventListener("click", () => {
    twitter = confirm("Estas por salir de la pagina. Estas ¿seguro?");

    if (twitter == true){
        location.href = "https://twitter.com/?lang=es";
    } else {
        alert("Por favor decida si ir o quedarse");
    }
});