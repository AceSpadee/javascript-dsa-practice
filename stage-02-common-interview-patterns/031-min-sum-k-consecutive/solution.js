function minSumKConsecutive(numbers, k) {
    if (k > numbers.length) {
        return null
    }

    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += numbers[i]
    }

    let smallestSum = currentSum;

    for (let i = k; i < numbers.length; i++) {
        currentSum -= numbers[i - k]
        currentSum += numbers[i]

        if (currentSum < smallestSum) {
            smallestSum = currentSum
        }
    }

    return smallestSum
}

export default minSumKConsecutive;