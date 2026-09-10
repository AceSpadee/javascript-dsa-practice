function countTarget(numbers, target) {
    let count = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            count++
        }
    }

    return count
}

export default countTarget;