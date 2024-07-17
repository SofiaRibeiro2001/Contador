(function(){
    const botoes = document.querySelectorAll('.contadorBtn');
    let contador = 0;

    botoes.forEach(function(botao){
        botao.addEventListener('click', function(){
            // aumentar e diminuir o numero
            if(botao.classList.contains('menosBtn')){
                contador--;
            } else if(botao.classList.contains('maisBtn')){
                contador++;
            }

            const cont = document.querySelector('#contador');
            cont.textContent = contador;

            //mudar a cor para numeros negativos e positivos
            if (contador < 0){
                cont.style.color = 'red';
            } else if (contador > 0){
                cont.style.color = 'green';
            } else {
                cont.style.color = 'black';
            }
        })
    })
})();