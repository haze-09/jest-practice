import { describe, expect, test } from "@jest/globals";
import {capitalize, reverseString} from "./strings.js";

test("is capitalized", () => {
  expect(capitalize("pizza")).toBe("Pizza");
});

test("casing fixed and is capitalized", () => {
  expect(capitalize("MOnkey")).toBe("Monkey");
});

test("is reversed", () => {
  expect(reverseString("Lion")).toBe("noiL");
});

test("is reversed", () => {
  expect(reverseString("eve")).toBe("eve");
});

describe("the calc", () => {
  test("can add", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("can subtract", () => {
    expect(calc.subtract(2, 3)).toBe(-1);
  });

  test("can multiply", () => {
    expect(calc.multiply(2, 3)).toBe(6);
  });

  test("can divide", () => {
    expect(calc.divide(4, 2)).toBe(2);
  });

  test("can divide and give proper decimal value", () => {
    expect(calc.divide(2, 3)).toBeCloseTo(0.6666666667, 10);
  });
});

describe("the Ceaser cipher function", () => {
  test("works with wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves casing", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("preserves punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("works for keys other than 3", () => {
    expect(caesarCipher("abc", 5)).toBe("fgh");
  });
});

test("analyses array works", () => {
  let obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
