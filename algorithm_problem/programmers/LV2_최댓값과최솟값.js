function solution(str) {
    var answer = '';
    var numbers = str.split(" ");
    var max_value = 0;
    var min_value = 0;
    for (var i = 0; i < numbers.length; i++){
        if (!max_value && !min_value){
            max_value = Number(numbers[i]);
            min_value = Number(numbers[i]);
        }
        else if (max_value < Number(numbers[i])){
            max_value = Number(numbers[i]);
        }
        if (min_value > Number(numbers[i])){
            min_value = Number(numbers[i]);
        }
    }
    answer = String(min_value) + " " + String(max_value);
    return answer;
}