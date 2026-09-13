function removeDuplicates(numbers) {
    const mySet = new Set();
    const newArray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!mySet.has(numbers[i])) {
            mySet.add(numbers[i])
            newArray.push(numbers[i])
        }
    }

    return newArray
}

export default removeDuplicates;