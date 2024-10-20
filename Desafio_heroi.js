// Variáveis para armazenar o nome e a experiência do herói
let nome = prompt("Digite o nome do herói:");
let xp = parseInt(prompt("Digite a quantidade de XP do herói:"));

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Saída com a mensagem formatada
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
alert(`O Herói de nome ${nome} está no nível de ${nivel}.`);
