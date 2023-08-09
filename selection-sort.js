

function selectionSort(arr) {

  // Copy the original array
  let copy = [...arr];
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while (copy.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));
    // Find the index of the minimum value in the unsorted half
    let index = Math.min(...copy)
    // Save and remove the value at the min index
    let minValue = copy.indexOf(index);
    let removed = copy.splice(minValue, 1)[0];
    // Add the min value to the end of the sorted array
    sorted.push(removed);
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));
    // Find the index of the minimum value in the unsorted half
    let index = divider;
    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[index]) {
        // Save the min value
        index = i;
      }
    }
    let minValue = arr[index];
    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = index; i > divider; i--) {
      arr[i] = arr[i - 1];
    }
    // Put the min value at the divider
    arr[divider] = minValue;
    // Increment the divider and repeat
    divider++;
  }
  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
