function soletrar(string){
    var novalista= [];
    var quantidade = string.length
    var interator = 0 
    while (interator < quantidade){
        novalista.push(string.substr(interator, 1));
        interator++;
    }
    return novalista 
}

