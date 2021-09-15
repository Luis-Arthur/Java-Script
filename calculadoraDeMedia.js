var nome = "Luis Arthur"
var notaPrimeiroBimestre = 7
var notaSegundoBimestre = 10
var notaTerceiroBimestre = 8
var notaQuartoBimestre = 7
var notafinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre +notaQuartoBimestre)/4

var notafixada = notafinal.toFixed(2)

console.log("Bem-vindo " + nome)
console.log("nota:" + notaPrimeiroBimestre)
console.log("nota:" + notaSegundoBimestre)
console.log("nota:" + notaTerceiroBimestre)
console.log("nota:" + notaQuartoBimestre)
console.log("nota final:" + notafinal)

if(notafinal >= 7){
  console.log("Aluno Aprovado, Parabéns!")
}else{
  console.log("Aluno Reprovado, Estude mais!")
}
