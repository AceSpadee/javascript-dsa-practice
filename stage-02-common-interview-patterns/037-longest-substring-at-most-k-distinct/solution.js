function longestSubstringAtMostKDistinct(text, k) {
    let frequency = {};
    let left = 0;
    let longest = 0;
    let distinctCount = 0;

    for (let right = 0; right < text.length; right++) {
        if (!frequency[text[right]]) {
            frequency[text[right]] = 1
            distinctCount++
        } else {
            frequency[text[right]] += 1
        }

        while (distinctCount > k) {
            frequency[text[left]] -= 1

            if (frequency[text[left]] === 0) {
                delete frequency[text[left]]
                distinctCount--
            }

            left++
        }

        let currentwindow = right - left + 1;
        if (currentwindow > longest) {
            longest = currentwindow
        }
    }

    return longest
}

export default longestSubstringAtMostKDistinct;