    /* alerta o ventana emergente (pop-up), diciendo que está saliendo de nuestro sitio. */
let afa = document.querySelector(".afa");
let rfef = document.querySelector(".rfef");
let fifa = document.querySelector(".fifa");
let afc = document.querySelector(".afc");
let caf = document.querySelector(".caf");
let conmebol = document.querySelector(".conmebol");
let uefa = document.querySelector(".uefa");
let ofc = document.querySelector(".ofc");

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