function validAnagram(text1, text2) {
    let text1Count = {}
    let text2Count = {}

    if (text1.length !== text2.length) {
        return false
    }

    for (let i = 0; i < text1.length; i++) {
        if (!text1Count[text1[i]]) {
            text1Count[text1[i]] = 1
        } else {
            text1Count[text1[i]] += 1
        }
    }

    for (let i = 0; i < text2.length; i++) {
        if (!text2Count[text2[i]]) {
            text2Count[text2[i]] = 1
        } else {
            text2Count[text2[i]] += 1
        }
    }

    for (const key of Object.keys(text1Count)) {
        if (!Object.hasOwn(text2Count, key)) {
            return false
        } else if (text2Count[key] !== text1Count[key]) {
            return false
        }
    };

    return true
}

export default validAnagram;