function solution(str) {
    var string_length = str.length;
    if (string_length % 2 == 1) {
        var answer = str.charAt(string_length / 2);
    }
    else {
        var answer = str.substr((string_length / 2) - 1, 2);
    }
    return answer;
}