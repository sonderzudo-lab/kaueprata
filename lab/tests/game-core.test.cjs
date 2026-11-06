"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Core = require("../tabuada/game-core.js");

function seeded(values) {
  let index = 0;
  return () => values[index++ % values.length];
}

test("a jornada percorre as tabuadas de 1 a 10 em 30 portões", () => {
  assert.equal(Core.totalGates("jornada"), 30);
  assert.equal(Core.tableForGate("jornada", 1), 1);
  assert.equal(Core.tableForGate("jornada", 3), 1);
  assert.equal(Core.tableForGate("jornada", 4), 2);
  assert.equal(Core.tableForGate("jornada", 30), 10);
});

test("um nível isolado cobre dez fatores e mantém a tabuada escolhida", () => {
  assert.equal(Core.totalGates("7"), 10);
  assert.equal(Core.tableForGate("7", 1), 7);
  assert.equal(Core.tableForGate("7", 10), 7);
  assert.deepEqual(
    Array.from({ length: 10 }, (_, index) => Core.factorSlotForGate("7", index + 1)),
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
});

test("as perguntas têm uma resposta correta e opções distintas", () => {
  for (let table = 1; table <= 10; table += 1) {
    for (let factor = 1; factor <= 10; factor += 1) {
      const question = Core.generateQuestion(table, factor, 3, seeded([0.1, 0.8, 0.3, 0.6]));
      assert.equal(question.resp, table * factor);
      assert.equal(question.opcoes.length, 3);
      assert.equal(new Set(question.opcoes).size, 3);
      assert.equal(question.opcoes[question.certa], question.resp);
      assert.ok(question.opcoes.some((value) => value < question.resp) || question.resp === 1);
      assert.ok(question.opcoes.some((value) => value > question.resp));
    }
  }
});

test("o baralho contém cada fator uma única vez", () => {
  const deck = Core.makeFactorDeck(seeded([0.3, 0.7, 0.1, 0.9]));
  assert.equal(deck.length, 10);
  assert.deepEqual(deck.slice().sort((a, b) => a - b), [1,2,3,4,5,6,7,8,9,10]);
});

test("a precisão considera acertos e erros", () => {
  assert.equal(Core.accuracy(8, 2), 80);
  assert.equal(Core.accuracy(0, 0), 0);
});
