function solution(arr, divisor) {
    var select_num = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % divisor == 0){
            select_num.push(arr[i]);
        }
    }
    if (select_num.length == 0){
        select_num.push(-1);
    }
    let answer = select_num.sort(function(a, b){ return a - b; }); // 오름차순
    // let answer = select_num.sort(function(a, b){ return b - a; }); // 내림차순
    return answer;
}