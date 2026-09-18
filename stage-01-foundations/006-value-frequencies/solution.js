function valueFrequencies(numbers) {
    let numbersCount = {}

    for (let i = 0; i < numbers.length; i++) {
        if (!numbersCount[numbers[i]]) {
            numbersCount[numbers[i]] = 1
        } else {
            numbersCount[numbers[i]] += 1
        }
    }
    
    return numbersCount
}

export default valueFrequencies;