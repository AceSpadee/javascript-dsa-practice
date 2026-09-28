function firstNonRepeatedValue(numbers) {
    let repeatedCount = {}

    for (let i = 0; i < numbers.length; i++) {
        if (!repeatedCount.numbers[i]) {
            repeatedCount.numbers[i] = 1
        } else {
            repeatedCount.numbers[i] += 1
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if (repeatedCount[numbers[i]] === 1) {
            return numbers[i]
        }
    }

    return null
}

export default firstNonRepeatedValue;