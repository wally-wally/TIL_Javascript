function solution(a, b) {
    var answer = '';
    var day_of_week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    var day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var total_day = 0;
    for (var i = 1; i < a; i++){
        total_day += day[i - 1];
    }
    answer = day_of_week[(total_day + b) % 7];
    return answer;
}

console.log(solution(5, 24));
console.log(solution(1, 4));