function doubleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1 && arr[i] === arr[i + 1]) {
            arr[i] *= 2;
            i++;
        }
        else{
            arr[i] *= 2;
        }
    }
}

const myArray = [1, 2, 2, 3, 4, 4, 5];
doubleArray(myArray);
console.log(myArray);