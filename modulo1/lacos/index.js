// Exercicos de interpretação
//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// 
let valor = 0
for(let i = 0; i < 5; i++) {
    valor += i
  }
  console.log(valor)  

  //R: 10
  
 // 2 a) O que vai ser impresso no console?
 /*  19,21,23,27,30 

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
 o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

R: Não é o sufiente precisa adicionar  .indexOf */ 

/*Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? Resposta Quatro linhas

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

// Exercícios de Escrita De Código 


const quantidadePetTotal =prompt("Digite a quantidade de Pets : ")
if (quantidadePetTotal <= 0 ){
  alert( "Que pena, você pode adotar um pet !")

} else {
 numeroDePets = prompt("Quais são os nomes dos seus pets ?")
}

 

