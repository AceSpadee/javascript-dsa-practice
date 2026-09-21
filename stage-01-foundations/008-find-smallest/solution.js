function findSmallest(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (smallest > numbers[i]) {
            smallest = numbers[i]
        }
    }

    return smallest
}

export default findSmallest;