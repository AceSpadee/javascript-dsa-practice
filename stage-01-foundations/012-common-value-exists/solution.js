function commonValueExists(numbers1, numbers2) {
    const mySet = new Set(numbers1);

    for (let i = 0; i < numbers2.length; i++) {
        if (mySet.has(numbers2[i])) {
            return true
        }
    }

    return false
}

export default commonValueExists;