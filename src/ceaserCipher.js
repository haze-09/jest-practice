export default function caesarCipher(string, key) {
  let set = "abcdefghijklmnopqrstuvwxyz".split("");
  key = key % set.length;

  let stringArray = string.split("");

  stringArray = stringArray.map((element) => {
    if (element.match(/^[a-z]$/)) {
      let index = set.indexOf(element);
      return set[indexCalc(index, key, set.length)];
    } else if (element.match(/^[A-Z]$/)) {
      let index = set.indexOf(element.toLowerCase());
      return set[indexCalc(index, key, set.length)].toUpperCase();
    } else {
      return element;
    }
  });

  return stringArray.join("");
}

function indexCalc(index, key, setLength) {
  return (index + key) % setLength;
}
