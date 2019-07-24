function abc(palavra) {
    var min = palavra.toLowerCase()
    var inicial=min.toString()
    var letra= inicial.substr(0,1)
    if (letra == "a"|| letra == "b" || letra == "c") {
    return true
    } else { 
        return false
}
}
