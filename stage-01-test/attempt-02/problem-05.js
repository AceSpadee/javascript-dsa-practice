function countSharedSingles(numbers1, numbers2) {
    let nums1Object = {};
    let nums2Object = {};

    for (let i = 0; i < numbers1.length; i++) {
        if (!nums1Object[numbers1[i]]) {
            nums1Object[numbers1[i]] = 1
        } else {
            nums1Object[numbers1[i]] += 1
        }
    }
    for (let i = 0; i < numbers2.length; i++) {
        if (!nums2Object[numbers2[i]]) {
            nums2Object[numbers2[i]] = 1
        } else {
            nums2Object[numbers2[i]] += 1
        }
    }

    let nums1Set = new Set();
    let nums2Set = new Set();
    let nums1Array = []
    let count = 0;

    for (const key of Object.keys(nums1Object)) {
        if (nums1Object[key] === 1) {
            nums1Set.add(key)
            nums1Array.push(key)
        }
    }
    for (const key of Object.keys(nums2Object)) {
        if (nums2Object[key] === 1) {
            nums2Set.add(key)
        }
    }

    for (let i = 0; i < nums1Array.length; i++) {
        if (nums2Set.has(nums1Array[i])) {
            count += 1
        }
    }

    return count
}

export default countSharedSingles;