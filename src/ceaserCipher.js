export default function caesarCipher(string, key) {
  let set = "abcdefghijklmnopqrstuvwxyz".split("");
  key = key % set.length;

  let stringArray = string.split("");

  stringArray.forEach((element, index) => {
    if (element.match(/^[a-z]$/)) {
      let indexInSet = set.indexOf(element);
      stringArray[index] = set[indexCalc(indexInSet, key, set.length)];
    } else if (element.match(/^[A-Z]$/)) {
      let indexInSet = set.indexOf(element.toLowerCase());
      stringArray[index] =
        set[indexCalc(indexInSet, key, set.length)].toUpperCase();
    } else {
      return element;
    }
  });

  return stringArray.join("");
}

function indexCalc(index, key, setLength) {
  return (index + key) % setLength;
}
