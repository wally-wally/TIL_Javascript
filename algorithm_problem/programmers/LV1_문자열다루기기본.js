function solution(s) {
    var answer = true;
    if (s.length == 4 || s.length == 6){
        for (var i = 0; i < s.length; i++){
            var ascii_value = s[i].charCodeAt(0);
            if (ascii_value < 48 || ascii_value > 57){
                answer = false;
                break;
            }
        }
    }
    else{
        answer = false;
    }
    return answer;
}