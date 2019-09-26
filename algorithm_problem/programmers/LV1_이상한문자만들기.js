function solution(str) {
    var answer = '';
    var str_array = str.split(" ");
    var word_cnt = str_array.length;
    for (var i = 0; i < word_cnt; i++){
        for (var j = 0; j < str_array[i].length; j++){
            if (j % 2 == 0){
                answer += str_array[i][j].toUpperCase();
            }
            else{
                answer += str_array[i][j].toLowerCase();
            }
        }
        if (i != word_cnt - 1){
            answer += ' ';
        }
    }
    return answer;
}