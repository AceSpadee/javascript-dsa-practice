function firstCharacterWithFrequency(text, targetFrequency) {
    let charCount = {}

    for (let i = 0; i < text.length; i++) {
        if (!charCount[text[i]]) {
            charCount[text[i]] = 1
        } else {
            charCount[text[i]] += 1
        }
    }

    for (let i = 0; i < text.length; i++) {
        if (charCount[text[i]] === targetFrequency) {
            return text[i]
        }
    }

    return null
}

export default firstCharacterWithFrequency;