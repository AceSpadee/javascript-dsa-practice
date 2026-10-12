function longestSubarrayWithinTarget(numbers, target) {
    let left = 0;
    let currentSum = 0;
    let longestLength = 0;

    for (let right = 0; right < numbers.length; right++) {
        currentSum += numbers[right]

        while (currentSum > target) {
            currentSum -= numbers[left]
            left++
        }
        
        let currentWindow = right - left + 1
        if (currentWindow > longestLength) {
            longestLength = currentWindow
        }
    }

    return longestLength
}

export default longestSubarrayWithinTarget;