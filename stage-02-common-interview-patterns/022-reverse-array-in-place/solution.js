function reverseArray(numbers) {
    if (numbers.length === 0 || numbers.length === 1) {
        return numbers
    }

    for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
        const targetIndex = numbers.length - 1 - i;
        
        const temp = numbers[i];
        numbers[i] = numbers[targetIndex];
        numbers[targetIndex] = temp;
    }

    return numbers
}

export default reverseArray;