const vitorias = prompt("Digite o número de vitórias do personagem:");
const derrotas = prompt("Digite o número de derrotas do personagem:");
const vitoriasInt = parseInt(vitorias);
const derrotasInt = parseInt(derrotas);
const saldo = vitoriasInt - derrotasInt;
let nivel = "Iniciante";
if (vitoriasInt < 10) {
  nivel = "Ferro";
} else if (vitoriasInt >= 11 && vitoriasInt <= 20) {
  nivel = "Bronze";
} else if (vitoriasInt >= 21 && vitoriasInt <= 50) {
  nivel = "Prata";
} else if (vitoriasInt >= 51 && vitoriasInt <= 80) {
  nivel = "Ouro";
} else if (vitoriasInt >= 81 && vitoriasInt <= 90) {
  nivel = "Diamante";
} else if (vitoriasInt >= 91 && vitoriasInt <= 100) {
  nivel = "Lendário";
} else if (vitoriasInt >= 101) {
  nivel = "Imortal";
}
console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivel}!`);