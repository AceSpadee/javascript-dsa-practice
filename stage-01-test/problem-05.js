function countCommonValues(numbers1, numbers2) {
    const mySet = new Set();
    const numbers2Set = new Set(numbers2);
    let count = 0

    for (let i = 0; i < numbers1.length; i++) {
        if (!mySet.has(numbers1[i])) {
            mySet.add(numbers1[i])

            if (numbers2Set.has(numbers1[i])) {
                count += 1
            }
        }
    }

    return count
}

export default countCommonValues;