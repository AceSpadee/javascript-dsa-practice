function findBalanceIndex(numbers) {
    let prefix = [0];

    for (let i = 0; i < numbers.length; i++) {
        let newTotal = prefix.at(-1) + numbers[i];
        prefix.push(newTotal);
    };

    let sumTotal = prefix[prefix.length - 1];

    for (let i = 0; i < numbers.length; i++) {

        let leftSum = prefix[i];
        let rightSum = sumTotal - prefix[i + 1]

        if (leftSum === rightSum) {
            return i
        }
    };

    return -1
}

export default findBalanceIndex;