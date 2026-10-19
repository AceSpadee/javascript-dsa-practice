function smallestSubarrayAtLeastKOdds(numbers, k) {
    let left = 0
    let oddCount = 0
    let smallest = Infinity

    for (let right = 0; right < numbers.length; right++) {
        if (numbers[right] % 2 !== 0) {
            oddCount++
        }

        while (oddCount >= k) {
            let currentWindow = right - left + 1

            if (currentWindow < smallest) {
                smallest = currentWindow
            }

            if (numbers[left] % 2 !== 0) {
                oddCount--
            }
            left++
        }
    }

    if (smallest === Infinity) {
        return 0
    }

    return smallest
}

export default smallestSubarrayAtLeastKOdds;