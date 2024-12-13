/* console.log(Math.random()) */
/* Math.random() 0 -1 */

const numero_random = Math.floor(Math.random() * 10) + 1
tentativas = 0
var limite = 3;

function adivinhar_Numero (tentativas) {
    console.log(tentativas)
    if (tentativas >= limite) {
        alert (`GamerOver! O número era ${numero_random}`)
        return;
    }
}
var adivinhar = Number (prompt("Adivinhe um número de 1 a 10 ")) 

if (adivinhar < numero_random) {
    alert ("é MAIOR") 
    adivinhar_Numero(tentativas++)
}
else if (adivinhar > numero_random) {
    alert ("é MENOR")
    adivinhar_Numero(tentativas++)
}else {
    alert ("Você acertou!")
} 

adivinhar_Numero (0)