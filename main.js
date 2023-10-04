function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < ListaDeTeclas.length) {
    const tecla = ListaDeTeclas[contador]
    const instrumento = tecla.classlist[1];
    //template tring
    constidAudio = '#som_${instrumento}';
    console.log(idAudio);

    ListaDeTeclas[contador].onclick = function () {
        tocaSomPom('#som_tecla_pom');
    }

contador = contador + 1;

console.log(contador);

}

