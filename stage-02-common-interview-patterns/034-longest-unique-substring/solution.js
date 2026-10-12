function longestUniqueSubstring(text) {
    const myset = new Set();
    let left = 0;
    let longest = 0;

    for (let right = 0; right < text.length; right++) {
        while (myset.has(text[right])) {
            myset.delete(text[left])
            left++
        }

        myset.add(text[right])

        if (myset.size > longest) {
            longest = myset.size
        }
    }

    return longest
}

export default longestUniqueSubstring;