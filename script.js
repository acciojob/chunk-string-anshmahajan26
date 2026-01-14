function stringChop(str, size) {
  // your code here
	
	  if (!str || size <= 0) return [];

  let result = [];

  for (let i = 0; i < str.length; i++) {
    let end = Math.min(i + size, str.length);
    result.push(str.slice(i, end));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
