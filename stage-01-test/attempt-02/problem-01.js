function firstValueBelow(numbers, threshold) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < threshold) {
            return numbers[i]
        }
    }

    return null
}

export default firstValueBelow;