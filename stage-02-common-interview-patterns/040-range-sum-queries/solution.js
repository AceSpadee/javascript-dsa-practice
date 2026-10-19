function rangeSumQueries(numbers, queries) {
    let prefix = [0]
    let sums = []
    
    for (let i = 0; i < numbers.length; i++) {
        let newTotal = prefix.at(-1) + numbers[i]
        prefix.push(newTotal)
    }

    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0]
        let end = queries[i][1] + 1

        let total = prefix[end] - prefix[start]

        sums.push(total)
    }

    return sums
}

export default rangeSumQueries;