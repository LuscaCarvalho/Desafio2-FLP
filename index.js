let saldoVitorias = ranking(50, 20);
let classeHeroi;

if (saldoVitorias > 0 && saldoVitorias <= 10) {
  classeHeroi = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
  classeHeroi = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
  classeHeroi = "prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
  classeHeroi = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
  classeHeroi = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
  classeHeroi = "Lendário";
} else if (saldoVitorias >= 101) {
  classeHeroi = "Imortal";
} else {
  console.log("Seu Herói esta fora do ranking!");
}

console.log(
  `O Herói tem de saldo de ${saldoVitorias} está no nível de ${classeHeroi}`
);

function ranking(qntVitorias, qntDerrotas) {
  let saldoRankeado = qntVitorias - qntDerrotas;
  return saldoRankeado;
}
