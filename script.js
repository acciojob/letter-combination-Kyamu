function letterCombinations(input_digit) {
  //Complete the function
	 // Create a mapping of digits to letters
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  // Initialize the result array with an empty string
  let result = [''];
  
  // Loop through each digit in the input string
  for (let i = 0; i < digits.length; i++) {
    // Get the letters corresponding to the current digit
    const letters = map[digits[i]];
    
    // Create a temporary array to store the new combinations
    const temp = [];
    
    // Loop through each letter and each existing combination in the result array
    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < result.length; k++) {
        // Append the current letter to the existing combination
        temp.push(result[k] + letters[j]);
      }
    }
    
    // Set the result array to the temporary array
    result = temp;
  }
  
  // Sort the result array lexicographically and return it
  return result.sort();
}

module.exports = letterCombinations;
