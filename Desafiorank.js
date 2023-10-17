const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let vitorias;
let derrotas;
rl.question('Digite o número de vitórias: ', (vitoriasInput) => {
  vitorias = parseInt(vitoriasInput);
  rl.question('Digite o número de derrotas: ', (derrotasInput) => {
    derrotas = parseInt(derrotasInput);
    const nivel = calcularNivel(vitorias);
    console.log(`O Herói tem o saldo de ${vitorias} vitórias e está no nível de ${nivel}!`);
    rl.close();
  });
});
function calcularNivel(vitorias) {
  if (vitorias < 10) {
    return 'Ferro';
  } else if (vitorias >= 11 && vitorias <= 20) {
    return 'Bronze';
  } else if (vitorias >= 21 && vitorias <= 50) {
    return 'Prata';
  } else if (vitorias >= 61 && vitorias <= 70) {
    return 'Ouro';
  } else if (vitorias >= 71 && vitorias <= 80) {
    return 'Diamante';
  } else if (vitorias >= 81 && vitorias <= 90) {
    return 'Lendário';
  } else if (vitorias >= 91 && vitorias <= 100) {
    return 'Imortal';
  } else {
    return 'Nível Desconhecido';
  }
}