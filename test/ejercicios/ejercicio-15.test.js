const { orderArray } = require("../ejercicios/ejercicio-15");

test("Comprobar si la función orderArray está definida", () => {
  expect(orderArray).toBeDefined();
});

test("Comprobar si el orden es correcto", () => {
  const inputArray = [
    "Hola",
    "soy",
    "Víctor Robles",
    "como",
    "estas",
    "hoy",
    "amigo",
    "yo",
    "voy",
    "a",
    "estudiar",
    "ahora"
  ];
  const expectedArray = ["a", "yo", "soy", "hoy", "voy", "Hola", "como", "estas", "amigo", "ahora", "estudiar", "Víctor Robles"];

  expect(orderArray(inputArray)).toEqual(expectedArray);
});
