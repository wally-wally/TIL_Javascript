function solution(a, b) {
    var answer = 0;
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++){
        answer += i
    }
    return answer;
}