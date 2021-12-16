
function Combinations(input, length, curstr) {
    if(curstr.length == length) return [ curstr ];
    var ret = [];
    for(var i = 0; i < input.length; i++) {
        ret.push.apply(ret, Combinations(input, length, curstr + input[i]));
    }
    return urutan = ret;
    // console.log(ret);
}

var n = 17368

var input = [ 'A', 'B', 'C', 'D','E','F'];
console.log(Combinations(input, 6, '')[n - 1]);
