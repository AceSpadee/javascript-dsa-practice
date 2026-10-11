function smallestSubarrayTarget(numbers, target) {
    let left = 0;
    let currentSum = 0;
    let smallestLength = Infinity;

    for (let right = 0; right < numbers.length; right++) {
        currentSum += numbers[right]

        while (currentSum >= target) {
            let currentWindow = right - left + 1
            if (currentWindow < smallestLength) {
                smallestLength = currentWindow
            }

            currentSum -= numbers[left]
            left++
        }
    }

    if (smallestLength === Infinity) {
        return 0
    }

    return smallestLength
}

export default smallestSubarrayTarget;