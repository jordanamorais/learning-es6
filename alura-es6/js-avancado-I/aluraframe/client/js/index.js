var campos = [
    document.querySelector("#data"),        // 0
    document.querySelector("#quantidade"),  // 1
    document.querySelector("#valor"),       // 2
];

console.log(campos);

// melhor definir aqui essa variavel, para fazer uma especie de cache.
// Se fosse definida dentro do form, toda vez que fosse fazer o submit ele iria requisitar a tbody
// Toda vez que precisar usá-lo, nao precisa buscá-lo de novo no DOM.
var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener("submit", function(event){

    event.preventDefault(); // nao submeta e nao recarrege e perca os dados inseridos na pagina

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        
        var td = document.createElement('td');

        td.textContent = campo.value; // porque campo é um input, por isso o value
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value; // quantidade * valor

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = ''; // limpar
    campos[1].value = 1; // pelo menos 1 na quantidade
    campos[2].value = 0; // valor inicial 0

    campos[0].focus(); // UX - já mantem o foco no primeiro input pro usuário
});
