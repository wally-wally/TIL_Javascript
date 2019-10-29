function solution(array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++) {
        var subset = [];
        for (var j = commands[i][0] - 1; j < commands[i][1]; j++) {
            subset.push(array[j]);
        }
        var sorted_subset = subset.sort(function(a, b){return a - b;});
        answer.push(sorted_subset[commands[i][2] - 1]);
    }
    return answer;
}