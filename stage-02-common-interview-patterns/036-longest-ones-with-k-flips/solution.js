function longestOnesWithKFlips(numbers, k) {
    let left = 0
    let flipCount = 0
    let longest = 0

    for (let right = 0; right < numbers.length; right++) {
        if (numbers[right] === 0) {
            flipCount++
        }

        while (flipCount > k) {
            if (numbers[left] === 0) {
                flipCount--
            }

            left++
        }

        let currentwindow = right - left + 1
        if (currentwindow > longest) {
            longest = currentwindow
        }
    }

    return longest
}

export default longestOnesWithKFlips;