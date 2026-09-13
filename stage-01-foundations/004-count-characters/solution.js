function countCharacters(text, target) {
    let count = 0

    for (let i = 0; i < text.length; i++) {
        if (text[i] === target) {
            count++
        }
    }

    return count
}

export default countCharacters;