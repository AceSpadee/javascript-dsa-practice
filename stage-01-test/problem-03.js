function countRepeatedValues(numbers) {
    let uniqueValues = {}
    let count = 0

    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueCount.numbers[i]) {
            uniqueCount.numbers[i] = 1
            count += 1
        }
    }

    return count
}

export default countRepeatedValues;