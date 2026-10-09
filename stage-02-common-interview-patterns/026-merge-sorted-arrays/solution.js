function mergeSortedArrays(numbers1, numbers2) {
    let i = 0
    let j = 0
    let sorted = []

    while (i < numbers1.length && j < numbers2.length) {
        if (numbers1[i] <= numbers2[j]) {
            sorted.push(numbers1[i])
            i++
        } else {
            sorted.push(numbers2[j])
            j++
        }
    }

    while (i < numbers1.length) {
        sorted.push(numbers1[i])
        i++
    }
    while (j < numbers2.length) {
        sorted.push(numbers2[j])
        j++
    }

    return sorted
}

export default mergeSortedArrays;