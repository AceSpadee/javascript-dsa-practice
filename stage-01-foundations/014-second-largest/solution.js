function secondLargest(numbers) {
    let largest = numbers[0];
    let second = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > second && numbers[i] < largest) {
            second = numbers[i]
        }
    }

    if (second === -Infinity || numbers.length < 2) {
        return null
    } else {
        return second
    }
}

export default secondLargest;