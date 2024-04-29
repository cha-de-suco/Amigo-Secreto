let amigos = []

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value
    let listaAmigos = document.getElementById("lista-amigos")
    amigos.push(nomeAmigo)

    if(listaAmigos.textContent == "") {
        listaAmigos.textContent = `${nomeAmigo}`
    } else {
        listaAmigos.textContent = listaAmigos.textContent + `, ${nomeAmigo}` 
    }

    nomeAmigo.value = ""
}

function sortear() {
    let listaSorteio = document.getElementById("lista-sorteio")
    
    embaralhar(amigos)
    
    console.log(amigos.length)

    for(let indice = 0; indice < amigos.length; indice++) {
        if(indice == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + ` ${amigos[indice]} ---> ${amigos[0]}` + `<br>`
        } else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + ` ${amigos[indice]} ---> ${amigos[indice+1]}` + `<br>` 
        }
    }
}

function embaralhar(lista) {
    for(let i = lista.lenght; i; i--) {

        const indiceAleatorio = Math.floor(Math.random () * i);

        [lista[i - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[i - 1]];        
    }
}

function reiniciar() {
    amigos = []
    document.getElementById("nome-amigo").value = null
    document.getElementById("lista-amigos").innerHTML = ``
    document.getElementById("lista-sorteio").innerHTML = ``
}

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        adicionar()
    }
})