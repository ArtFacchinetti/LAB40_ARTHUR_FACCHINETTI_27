// Funcionalidade 27: Identificador de dia da semana.
// Objetivo: Retorna o dia da semana de uma data ISO.
// Exemplo de entrada: { data: '2026-11-26' }
// Implemente conforme as regras e critérios do enunciado fornecido pelo professor.

const implemented = true;

function achaDia(data) {
  diaDaSemana =
    data.getUTCDay() == 0
      ? "Domingo"
      : data.getUTCDay() == 1
        ? "Segunda"
        : data.getUTCDay() == 2
          ? "Terça"
          : data.getUTCDay() == 3
            ? "Quarta"
            : data.getUTCDay() == 4
              ? "Quinta"
              : data.getUTCDay() == 5
                ? "Sexta"
                : data.getUTCDay() == 6
                  ? "Sábado"
                  : "Dia não encontrado";

  return diaDaSemana;
}

function useRegex(input) {
  let regex = /\{"data":"[0-9]{4}-[0-9]{2}-[0-9]{2}"\}/i;
  return regex.test(input);
}

// Desenvolva a regra de negócio e valide todos os dados de entrada.
function execute(input) {
  if (!useRegex(JSON.stringify(input))) {
    return "Entrada em formato incorreto!";
  }

  const [ano, mes, dia] = input.data.split("-").map(Number);
  const data = new Date(Date.UTC(ano, mes - 1, dia));

  return achaDia(data);
}

// Mantém o contrato de integração utilizado pela API central.
module.exports = {
  id: 27,
  name: "Identificador de dia da semana",
  description: "Retorna o dia da semana de uma data ISO.",
  implemented,
  execute,
};
