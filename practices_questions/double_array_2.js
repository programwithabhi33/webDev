function doubleArrayWithConsecutiveDuplicates(arr) {
    // Helper function to check if two elements are consecutive duplicates
    function areConsecutiveDuplicates(prev, current, next) {
      return current === next;
    }
  
    // Iterate through the array and double elements accordingly
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && areConsecutiveDuplicates(arr[i - 1], arr[i], arr[i + 1])) {
        // If consecutive duplicates, double only one of them
        arr[i] *= 2;
        i++; // Skip the next element to avoid doubling it again
      } else {
        // Double all other elements
        arr[i] *= 2;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
                     [2, 4, 2, 6,
                     8, 4, 8, 10];
  const resultArray = doubleArrayWithConsecutiveDuplicates(inputArray);
  console.log(resultArray);