(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.TabuadaCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const TABLE_MIN = 1;
  const TABLE_MAX = 10;
  const FACTOR_MIN = 1;
  const FACTOR_MAX = 10;
  const JOURNEY_GATES_PER_TABLE = 3;

  function shuffle(list, rng = Math.random) {
    for (let index = list.length - 1; index > 0; index -= 1) {
      const next = Math.floor(rng() * (index + 1));
      [list[index], list[next]] = [list[next], list[index]];
    }
    return list;
  }

  function reverseDigits(value) {
    let result = 0;
    while (value > 0) {
      result = result * 10 + (value % 10);
      value = Math.floor(value / 10);
    }
    return result;
  }

  function misconceptionLayers(a, b, answer) {
    return [
      [answer - a, answer + a, answer - b, answer + b],
      [a + b, answer % 10 === 0 ? 0 : reverseDigits(answer)],
      [answer - 10, answer + 10],
      [answer - 1, answer + 1, answer - 2, answer + 2],
    ];
  }

  function distractors(a, b, quantity = 2, rng = Math.random) {
    const answer = a * b;
    const seen = new Set([answer]);
    const pool = [];

    for (const layer of misconceptionLayers(a, b, answer)) {
      for (const value of shuffle(layer.slice(), rng)) {
        if (value > 0 && !seen.has(value)) {
          seen.add(value);
          pool.push(value);
        }
      }
    }

    const output = [];
    const used = new Set();
    const take = (filter) => {
      for (const value of pool) {
        if (!used.has(value) && (!filter || filter(value))) {
          used.add(value);
          output.push(value);
          return true;
        }
      }
      return false;
    };

    if (quantity >= 2) {
      take((value) => value < answer);
      take((value) => value > answer);
    }
    while (output.length < quantity && take(null)) {}

    let offset = 1;
    while (output.length < quantity) {
      const value = answer + offset;
      if (!used.has(value) && value !== answer) {
        used.add(value);
        output.push(value);
      }
      offset += 1;
    }
    return output.slice(0, quantity);
  }

  function generateQuestion(table, factor, optionCount = 3, rng = Math.random) {
    const options = distractors(table, factor, optionCount - 1, rng);
    const answer = table * factor;
    options.push(answer);
    shuffle(options, rng);
    return { a: table, b: factor, resp: answer, opcoes: options, certa: options.indexOf(answer) };
  }

  function normalizeLevel(level) {
    if (level === "jornada") return "jornada";
    const table = Number(level);
    return Number.isInteger(table) && table >= TABLE_MIN && table <= TABLE_MAX
      ? String(table)
      : "jornada";
  }

  function totalGates(level, journeyGatesPerTable = JOURNEY_GATES_PER_TABLE) {
    return normalizeLevel(level) === "jornada"
      ? (TABLE_MAX - TABLE_MIN + 1) * journeyGatesPerTable
      : FACTOR_MAX - FACTOR_MIN + 1;
  }

  function tableForGate(level, gate, journeyGatesPerTable = JOURNEY_GATES_PER_TABLE) {
    const normalized = normalizeLevel(level);
    if (normalized !== "jornada") return Number(normalized);
    return Math.min(
      TABLE_MIN + Math.floor((Math.max(gate, 1) - 1) / journeyGatesPerTable),
      TABLE_MAX
    );
  }

  function factorSlotForGate(level, gate, journeyGatesPerTable = JOURNEY_GATES_PER_TABLE) {
    return normalizeLevel(level) === "jornada"
      ? (Math.max(gate, 1) - 1) % journeyGatesPerTable
      : (Math.max(gate, 1) - 1) % (FACTOR_MAX - FACTOR_MIN + 1);
  }

  function makeFactorDeck(rng = Math.random) {
    return shuffle(Array.from({ length: FACTOR_MAX }, (_, index) => index + FACTOR_MIN), rng);
  }

  function accuracy(correct, errors) {
    const attempts = correct + errors;
    return attempts ? Math.round((correct / attempts) * 100) : 0;
  }

  return Object.freeze({
    TABLE_MIN,
    TABLE_MAX,
    FACTOR_MIN,
    FACTOR_MAX,
    JOURNEY_GATES_PER_TABLE,
    shuffle,
    distractors,
    generateQuestion,
    normalizeLevel,
    totalGates,
    tableForGate,
    factorSlotForGate,
    makeFactorDeck,
    accuracy,
  });
});
