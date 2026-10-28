function countEvenSumRanges(numbers, queries) {
    let prefix = [0];
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let newTotal = prefix.at(-1) + numbers[i];
        prefix.push(newTotal);
    };

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1] + 1;

        let total = prefix[end] - prefix[start];

        if (total % 2 === 0) {
            count += 1
        };
    };

    return count;
}

export default countEvenSumRanges;