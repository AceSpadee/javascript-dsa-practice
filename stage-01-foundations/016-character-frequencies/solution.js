function characterFrequencies(text) {
    let charCount = {}

    for (let i = 0; i < text.length; i++) {
        if (!charCount[text[i]]) {
            charCount[text[i]] = 1
        } else {
            charCount[text[i]] += 1
        }
    }

    return charCount
}

export default characterFrequencies;