function firstUniqueCharacter(text) {
    let repeated = {}

    for (let i = 0; i < text.length; i++) {
        if (!repeated[text[i]]) {
            repeated[text[i]] = 1
        } else {
            repeated[text[i]] += 1
        }
    }

    for (let i = 0; i < text.length; i++) {
        if (repeated[text[i]] === 1) {
            return text[i]
        }
    }

    return null
}

export default firstUniqueCharacter;