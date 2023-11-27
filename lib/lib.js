const k_combinations = (arr, k) => {
    if (k <= 0 || k > arr.length) return []
    if (k == arr.length) return [arr]
    if (k == 1) return arr.reduce((acc, v) => {acc.push(v); return acc}, [])

    let combs = []
    for (let i = 0; i < arr.length - k + 1; i++) {
        let head = arr.slice(i, i+1)
        let tailcombs = k_combinations(arr.slice(i + 1), k - 1)
        for (let j = 0; j < tailcombs.length; j++) {
            combs.push(head.concat(tailcombs[j]))
        }
    }

    return combs
}

const combinations = arr => {
    let combs = []
    for (let k = 1; k <= arr.length; k++) {
        let k_combs = k_combinations(arr, k)
        for (let i = 0; i < k_combs.length; i++) {
            combs.push(k_combs[i])
        }
    }
    return combs
}

if (!module.parent) {
    arr = [0,1,2,3]
    console.log(k_combinations(arr, 2))
    console.log(combinations(arr))
}

module.exports = {
    combinations,
    k_combinations
};
