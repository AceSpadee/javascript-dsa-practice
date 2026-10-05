function removeTarget(numbers, target) {
    if (numbers.length === 0) {
        return numbers
    }

    let shiftIndex = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== target) {
            numbers[shiftIndex] = numbers[i]
            shiftIndex += 1
        }
    }
    numbers.length = shiftIndex
    return numbers
}

export default removeTarget;