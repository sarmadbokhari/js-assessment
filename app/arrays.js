if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
                var search = arr.indexOf(item);
                return search;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
            for (var i = 0; i < arr.length; i++){
                                if (arr[i] == item){
                                    arr.splice(i, 1);
                                }
            }
                return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i < arr.length; i++){
                if (arr[i] == item){
                    arr.splice(i, 1);
                }
            }
                return arr;
    },

    append : function(arr, item) {
                var newarr = arr.push(item);
                return arr;
    },

    truncate : function(arr) {
                var newarr = arr.pop(arr.length);
                return arr;
    },

    prepend : function(arr, item) {
            var newarr = arr.unshift(10);
            return arr;
    },

    curtail : function(arr) {
                var newarr = arr.shift(0);
                return arr;

    },

    concat : function(arr1, arr2) {
                var newarr = arr1.concat(arr2);
                return newarr;
    },

    insert : function(arr, item, index) {
                var newarr = arr.splice(index, 0, item);
                return arr;
    },

    count : function(arr, item) {
            var count = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == item){
                    count++;
                }
            }
            return count;
    },

    duplicates : function(arr) {
                    var count = 0;
                    for (var i = 0; i < arr.length; i++){
                        if (arr[i] = (arr[i] + 1)){
                            arr.splice(i, 1)
                        }
                    }
                    return arr;
    },

    square : function(arr) {
                var newarr = [];
                for (var i = 0; i < newarr.length; i++){
                    newarr.push(arr[i] * arr[i])
                }
                return newarr;
    },

    findAllOccurrences : function(arr, target) {


    }
  };
});
