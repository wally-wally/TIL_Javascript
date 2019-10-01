function solution(s){
    var answer = true;
    var p_cnt = 0;
    var y_cnt = 0;
    for (var i = 0; i < s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            p_cnt += 1;
        }
        else if(s[i] == 'y' || s[i] == 'Y'){
            y_cnt += 1;
        }
    }
    if(p_cnt != y_cnt){
        answer = false;
    }

    return answer;
}