function countMaximumOccurrences(numbers) {
    if (numbers.length === 0) {
        return 0
    }

    let largest = numbers[0];
    let numbersCount = {};

    for (let i = 0; i < numbers.length; i++) {
        if (!numbersCount[numbers[i]]) {
            numbersCount[numbers[i]] = 1
        } else {
            numbersCount[numbers[i]] += 1
        }
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }

    return numbersCount[largest]
}

export default countMaximumOccurrences;