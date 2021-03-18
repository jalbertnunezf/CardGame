var vida = 10;
var selector1 = -1;
var punto = 0;
var racha = 0;
var numeros = [];

for (let index = 0; index < 8; index++) {
    var b = false
    var num;

    while (b == false) {
        var r = Math.floor(Math.random() * ((7 + 1) - 0) + 0);
        if (numeros.indexOf(r) > -1) {

        } else {

            num = r;
            break;
        }
    }
    numeros.push(num);

}

function cambio() {
    for (let index = 0; index < 16; index++) {
        var img = document.getElementsByTagName("img");
        img[index].setAttribute("src", "imagenes/default.png");

    }
}

function inicio() {


    for (let index = 0; index < 8; index++) {
        var divp = document.getElementById("div2");
        var div = document.createElement('div');
        div.setAttribute("class", " col-md-3 barajas comienzo")
        var img = document.createElement('img');
        img.setAttribute("id", numeros[index]);
        img.setAttribute("src", "imagenes/" + img.id + ".png");
        img.addEventListener("click", click);
        div.appendChild(img);
        divp.appendChild(div);
    }

    var num2 = [];
    for (let index = 0; index < 8; index++) {
        var b = false
        var num;

        while (b == false) {
            var r = Math.floor(Math.random() * ((7 + 1) - 0) + 0);
            if (num2.indexOf(r) > -1) {

            } else {
                num = r;
                break;
            }
        }
        num2.push(num);

    }
    for (let index = 0; index < 8; index++) {
        var divp = document.getElementById("div2");
        var div = document.createElement('div');
        div.setAttribute("class", " col-md-3 barajas comienzo");
        var img = document.createElement('img');
        img.setAttribute("id", num2[index]);
        img.setAttribute("src", "imagenes/" + img.id + ".png");
        img.addEventListener("click", click);
        div.appendChild(img);
        divp.appendChild(div);
    }
    setTimeout(cambio, 1000);

};

function validar(n) {
    var v = false;
    if (n == selector1.id) {
        v = true;

    } else {
        v = false;
    }
    return v;
}


function fin() {
    if (vida == 0) {
        alert("Perdiste");
        location.href = "index.html";
    } else if (punto == 8) {
        alert("Ganaste, felicidades");
        location.href = "index.html";
    }
}

function actualizar() {

    var puntos = document.getElementById("puntos");
    var vidas = document.getElementById("vidas");
    var rachas = document.getElementById("rachas");
    puntos.textContent = "Puntos: " + punto;
    vidas.textContent = "Vidas: " + vida;
    rachas.textContent = "Racha: " + racha;
    setTimeout(fin, 400);
}

function click(e) {
    if (selector1 == -1) {
        selector1 = e.target;
        e.target.setAttribute("src", "imagenes/" + e.target.id + ".png");

    } else {
        if (e.target == selector1) {

        } else {
            e.target.setAttribute("src", "imagenes/" + e.target.id + ".png");
            var v = validar(e.target.id);

            if (v == true) {
                punto++;
                selector1 = -1;
                racha++;

            } else {

                vida--;
                racha = 0;
                function animacion() {
                    e.target.setAttribute("src", "imagenes/default.png");
                    selector1.setAttribute("src", "imagenes/default.png");
                    selector1 = -1;
                }
            }

            setTimeout(animacion, 300);
        }

    }
    actualizar();
}

