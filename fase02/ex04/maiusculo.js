function maiusculo (palavra){
    var palavra1 = palavra.substr(0,3);
    palavra = palavra.replace(palavra1, palavra1.toUpperCase());
    return palavra;
}