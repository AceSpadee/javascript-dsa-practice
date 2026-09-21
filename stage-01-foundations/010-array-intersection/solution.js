function arrayIntersection(numbers1, numbers2) {
    const mySet = new Set();
    const numbers2Set = new Set(numbers2);
    const newArray = [];
    
    for (let i = 0; i < numbers1.length; i++) {
        if (!mySet.has(numbers1[i])) {
            mySet.add(numbers1[i])
            
            if (numbers2Set.has(numbers1[i])) {
                newArray.push(numbers1[i])
            }
        }
    }
    
    return newArray
}

export default arrayIntersection;