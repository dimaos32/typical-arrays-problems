
exports.min = function min (array) {
    if (!Array.isArray(array)) return 0;
    if (!array.length) return 0;
  
    let res = array[0];

    array.forEach((item) => {
        if (item < res) res = item;
    });

    return res;
}

exports.max = function max (array) {
    if (!Array.isArray(array)) return 0;
    if (!array.length) return 0;
  
    let res = array[0];

    array.forEach((item) => {
        if (item > res) res = item;
    });

    return res;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array)) return 0;
    if (!array.length) return 0;

    return array.reduce((total, item) => total + item, 0) / array.length;
}
