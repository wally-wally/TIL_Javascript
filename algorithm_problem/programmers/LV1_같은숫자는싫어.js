function solution(arr){
    var answer = [-1];
    for (var i = 0; i < arr.length; i++){
        if (answer[answer.length-1] != arr[i]){
            answer.push(arr[i]);
        }
    }
    answer.shift();
    return answer;
}