function countWindowsMeetingTarget(numbers, k, target) {
    if (k > numbers.length) {
        return 0
    };

    let count = 0;

    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += numbers[i]
    }

    if (currentSum >= target) {
        count++
    }

    for (let i = k; i < numbers.length; i++) {
        currentSum -= numbers[i - k]
        currentSum += numbers[i]

        if (currentSum >= target) {
            count++
        }
    }

    return count
}

export default countWindowsMeetingTarget;