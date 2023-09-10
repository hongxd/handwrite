function toCamelCase(str) {
  let arr = str.split(/[-_]/);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}

console.log(toCamelCase('hello-world')); // helloWorld
console.log(toCamelCase('hello_world')); // helloWorld
console.log(toCamelCase('hello-world-goodbye')); // helloWorldGoodbye
