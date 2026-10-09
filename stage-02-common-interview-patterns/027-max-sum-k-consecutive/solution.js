function maxSumKConsecutive(numbers, k) {
    if (k > numbers.length) {
        return null
    }

    let currentSum = 0

    for (let i = 0; i < k; i++) {
        currentSum += numbers[i]
    }

    let maxSum = currentSum

    for (let i = k; i < numbers.length; i++) {
        currentSum -= numbers[i - k]
        currentSum += numbers[i]

        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }

    return maxSum
}

export default maxSumKConsecutive;