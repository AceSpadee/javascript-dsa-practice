function isPalindrome(text) {
    let left = 0
    let right = text.length - 1

    while (left < right) {
        if (text[left] !== text[right]) {
            return false
        } else {
            left += 1
            right -= 1
        }
    }

    return true
}

export default isPalindrome;