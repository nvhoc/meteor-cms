QuickSort = function (sortArr, isALessThanB) {
    var tmpArr = _.union([], sortArr);
    var doAction = function (arr) {
        var left = [];
        var right = [];

        if (!Array.isArray(arr)) {
            return "input is not an array";
        }

        if (arr.length <= 1) return arr;

        var pivot = arr[0];
        arr.shift();
        for (var i = 0; i < arr.length; i++) {
            isALessThanB(arr[i], pivot)
                ? left.push(arr[i])
                : right.push(arr[i]);
        }
        return _.union(doAction(left), [pivot], doAction(right));
    };
    return doAction(tmpArr);
};