function countRepeatedCharacters(text) {
    let countRepeats = {};
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (!countRepeats[text[i]]) {
            countRepeats[text[i]] = 1
        } else {
            countRepeats[text[i]] += 1
        }
    }

    for (const key of Object.keys(countRepeats)) {
        if (countRepeats[key] > 1) {
            count += 1
        }
    }

    return count
}

export default countRepeatedCharacters;