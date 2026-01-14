function stringChop(str, size) {
  // if user clicked cancel or gave empty string
  if (str === null || str === "") return [];

  // convert size to number
  size = Number(size);

  // if size is invalid
  if (size <= 0) return [];

  let result = [];

  // IMPORTANT: jump by size (real chunking)
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// DO NOT CHANGE
const str = prompt("Enter string:");
const size = prompt("Enter size:");
alert(stringChop(str, size));
