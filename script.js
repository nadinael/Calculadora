function insert(num) {
  var numero = document.getElementById('resultado').innerHTML;
  console.log("log: "+numero);
if(numero === "Nada para calcular."){
  //console.log("cond ");
  //alert("NADA");
  numero = document.getElementById('resultado').innerHTML = "";
}
  
  document.getElementById('resultado').innerHTML = numero + num;
}
function limpar() {
  document.getElementById('resultado').innerHTML = "";
}
function setar() {
  var res = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = res.substring(0,res.length -1);
//console.log(""+res.length);
}
function calcular(){
  var calculo = document.getElementById('resultado').innerHTML;
  if(calculo){
    document.getElementById('resultado').innerHTML = eval(calculo);
  }else {
    document.getElementById('resultado').innerHTML = "Nada para calcular.";
  }
}