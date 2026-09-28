function countAboveAverage(numbers) {
    let total

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    let average = total / numbers.length;

    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > average) {
            count += 1
        }
    }

    return count
}

export default countAboveAverage;