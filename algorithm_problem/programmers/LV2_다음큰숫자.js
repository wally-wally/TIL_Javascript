function solution(num) {
    var bin = num.toString(2);
    var one_cnt = 0;
    for(var i = 0; i < bin.length; i++){
        if(bin[i] == '1'){
            one_cnt += 1;
        }
    }
    var result = num;
    while(true){
        var res_one_cnt = 0;
        ++result;
        var result_bin = result.toString(2);
        for(var j = 0; j < result_bin.length; j++){
            if(result_bin[j] == '1'){
                res_one_cnt += 1;
            }
        }
        if(one_cnt == res_one_cnt){
            return result;
        }
    }
}

console.log(solution(15));