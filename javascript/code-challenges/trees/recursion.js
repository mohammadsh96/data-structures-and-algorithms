
function fac(n){
if(n===0 || n ===1){

return 1 ;

}else{



let fact = 1 ;
while (n>1) {

fact = fact* n ;
n =n-1;
}
console.log(fact);
return fact ;
}

}
fac(6)
