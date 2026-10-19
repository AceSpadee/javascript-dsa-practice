function longestSubarrayAtMostKEvens(numbers, k) {
    let left = 0;
    let evenCount = 0;
    let longest = 0;

    for (let right = 0; right < numbers.length; right++) {
        if (numbers[right] % 2 === 0) {
            evenCount++
        }

        while (evenCount > k) {
            if (numbers[left] % 2 === 0) {
                evenCount--
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

export default longestSubarrayAtMostKEvens;