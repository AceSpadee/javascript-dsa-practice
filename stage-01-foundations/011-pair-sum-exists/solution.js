function pairSumExists(numbers, target) {
    const mySet = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        let attempt = target - numbers[i];

        if (mySet.has(attempt)) {
            return true
        } else {
            mySet.add(numbers[i])
        }
    }

    return false
}

export default pairSumExists;