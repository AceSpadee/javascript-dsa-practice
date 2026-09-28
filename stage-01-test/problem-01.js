function firstIndexAbove(numbers, threshold) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > threshold) {
            return i
        }
    }
    return -1
}

export default firstIndexAbove;