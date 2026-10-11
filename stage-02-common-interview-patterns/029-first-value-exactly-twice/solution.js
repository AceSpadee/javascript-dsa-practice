function firstValueExactlyTwice(numbers) {
    let count = {}

    for (let i = 0; i < numbers.length; i++) {
        if (!count[numbers[i]]) {
            count[numbers[i]] = 1
        } else {
            count[numbers[i]] += 1
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if (count[numbers[i]] === 2) {
            return numbers[i]
        }
    }

    return null
}

export default firstValueExactlyTwice;