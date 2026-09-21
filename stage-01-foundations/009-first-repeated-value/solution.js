function firstRepeatedValue(numbers) {
    let repeated = {}

    for (let i = 0; i < numbers.length; i++) {
        if (!repeated[numbers[i]]) {
            repeated[numbers[i]] = 1
        } else {
            return numbers[i]
        }
    }

    return null
}

export default firstRepeatedValue;