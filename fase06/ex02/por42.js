function por42(n1,n2){
var x= Math.ceil((n1/42 || n2/42) +1) *42
if ( x <= n2){
 return x 

} else {
    
    console.log ("Não encontrado") 
    return false 
}
}
