function longestSubarrayAtMostKOdds(numbers, k) {
    let left = 0;
    let oddCount = 0;
    let longest = 0;

    for (let right = 0; right < numbers.length; right++) {
        if (numbers[right] % 2 !== 0) {
            oddCount++
        }

        while (oddCount > k) {
            if (numbers[left] % 2 !== 0) {
                oddCount--
            }
            left++
        }

        let currentWindow = right - left + 1

        if (currentWindow > longest) {
            longest = currentWindow
        }
    }

    return longest
}

export default longestSubarrayAtMostKOdds;