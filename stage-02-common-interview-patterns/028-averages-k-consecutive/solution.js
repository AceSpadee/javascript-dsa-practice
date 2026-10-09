function averageKConsecutive(numbers, k) {
    if (k > numbers.length) {
        return []
    }

    let currentSum = 0

    for (let i = 0; i < k; i++) {
        currentSum += numbers[i]
    }

    let arraySum = []
    arraySum.push(currentSum / k)

    for (let i = k; i < numbers.length; i++) {
        currentSum -= numbers[i - k]
        currentSum += numbers[i]
        
        arraySum.push(currentSum / k)
    }

    return arraySum
}

export default averageKConsecutive;