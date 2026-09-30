function countDistinctBelowAverage(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    let average = total / numbers.length;
    let count = 0;
    let addedNums = {};
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < average && !addedNums[numbers[i]]) {
            count += 1
            addedNums[numbers[i]] = 1
        }
    }

    return count
}

export default countDistinctBelowAverage;