function findLargest(numbers) {
    let highest = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i]
        }
    }

    return highest
}

export default findLargest;