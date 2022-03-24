let nome = "Aironys Garrido de Macedo";
let nome2 = "Amanda Carla";

let resultado = nome.length;   // Para chamar o resultado
let resultado2 = nome2.indexOf('Carla');  // Para saber a posição
 
console.log(resultado);    // Para saber quantos caracter tem na palavra

console.log(resultado2); 

let nome3 = "Dilan Santos";
let resultado3 = " ";

if (nome3.indexOf('Santos') > -1) {
    resultado3 = 'Achou';

}else{
    resultado3 = 'Não Achou';
}

console.log(resultado3);


let carro = 'Corola';

console.log(carro.length);  // Para saber o tamnho da palavra. (carro = 6 caracter)
console.log(carro.indexOf('o')) // Para localizar a posição da letra.  (0 = posição 1)

console.log(carro.split('')); // Para separa palavras e letras. Em Arrays;
console.log(carro.charAt('0')) // Para localiza o indice da letra. (0 = letra C).
