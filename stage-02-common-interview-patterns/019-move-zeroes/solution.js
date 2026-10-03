function moveZeroes(numbers) {
    let insertIndex = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            numbers[insertIndex] = numbers[i]
            insertIndex += 1
        }
    }

    for (let i = insertIndex; i < numbers.length; i++) {
        numbers[i] = 0
    }

    return numbers
}

export default moveZeroes;