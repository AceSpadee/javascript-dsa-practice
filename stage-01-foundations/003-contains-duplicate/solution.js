function containsDuplicate(numbers) {
    const mySet = new Set(numbers);

    if (mySet.size !== numbers.length) {
        return true
    } else {
        return false
    }
}

export default containsDuplicate;