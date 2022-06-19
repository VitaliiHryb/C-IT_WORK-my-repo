const checker = arr => {
    if (!Array.isArray(arr)) return null;
    const [...rest] = arr;
    let sum = arr[0] + arr[arr.length - 1];
    return sum > 1000;
};