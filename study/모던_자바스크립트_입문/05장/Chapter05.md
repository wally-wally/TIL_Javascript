# :keyboard: 05장. 표현식과 연산자

<br>

## 1. 산술 연산

### 1.1 산술 이항 연산자의 특징

- 정수끼리 나누어도 결과가 부동소수점이 된다.
  - 7 / 2 => `3.5`
- 나머지 연산자 `%`의 피연산자는 부동소수점이다.
  - 15 % 4 => `3`
  - 5 % 1.5 => `0.5`
- `+` 연산자는 피연산자 중 하나가 문자열이면 나머지 피연산자를 문자열로 만든다.
  - 1 + "2month" => `"12month"`
- 계산할 수 없는 경우 `NaN`으로 평가한다. 또한 산술 연산자의 피연산자가 `true`면 1, `false`와 `null`이면 0으로 평가한다. `undefined`면 `NaN`으로 평가한다.
  - 0 / 0 => `NaN`
  - "one" * 1 => `NaN`
  - true + true => `2`
  - 1 + null => `1`
  - 1 + undefined => `NaN`

<br>

### 1.2 Math 객체의 프로퍼티

| 메서드         | 설명                                   |
| -------------- | -------------------------------------- |
| Math.PI        | 원주율                                 |
| Math.abs(x)    | x의 절댓값                             |
| Math.cbrt(x)   | x의 세제곱근                           |
| Math.ceil(x)   | x 이상의 최소 정수                     |
| Math.exp(x)    | e의 x제곱                              |
| Math.floor(x)  | x 이하의 최대 정수                     |
| Math.log(x)    | x의 자연로그                           |
| Math.log2(x)   | x의 밑이 2인 로그                      |
| Math.log10(x)  | x의 밑이 10인 로그                     |
| Math.max(x, y) | x, y 중 큰 값                          |
| Math.min(x, y) | x, y 중 작은 값                        |
| Math.pow(x, p) | x의 p 제곱                             |
| Math.random()  | 0 이상 1 미만의 난수                   |
| Math.round(x)  | x의 반올림                             |
| Math.sign(x)   | x의 부호(양수면 1, 0이면 0, 음수면 -1) |
| Math.sqrt(x)   | x의 제곱근                             |
| Math.trunc(x)  | x의 정수부                             |

<br>

## 2. 문자열 제어하기

### 2.1 문자열 연결

- `+` 연산자는 피연산자가 모두 문자열이면 문자열로 연결한다.

  - "Hello " + "World!" => `"Hello World!"`
  - "1" + "2" => `"12"`

- 피연산자 중 하나가 문자열 또는 문자열로 변환할 수 있는 객체라면 다른 피연산자의 타입을 문자열로 바꾼 다음 연결한다.

  - 10 + " little indians" => `"10 little indians"`
  - 1 + {} => `"1[object Object]"`
  - true + (new Date()) => `"trueTue Sat Aug 05 2017 22:38:59 GMT+0900 (KST)"`

- 문자열을 연결하는 방법을 활용하면 변수 값을 문자열로 꾸며서 표시할 수 있다.

  ```javascript
  let a = 3;
  console.log("a 값은 " + a + "입니다.") // a 값은 3입니다.
  ```

<br>

### 2.2 문자열을 조작하는 메서드

```javascript
let string = "Respect yourself and others will respect you."
let string2 = "We aim above the mark to hit the mark."
let string3 = "Don't find fault, find a remedy."

console.log(string.length)
console.log(string.charAt(3))
console.log(string.concat(string2))
console.log(string.concat(string2, string3))
console.log(string.concat(string2).concat(string3))
console.log(string.includes('c'))
console.log(string.includes(','))
console.log(string.indexOf('y'))
console.log(string.lastIndexOf('y'))
console.log(string.repeat(2))
console.log(string.replace('Respect', 'Good'))
console.log(string.slice(4))
console.log(string.slice(1, 4))
console.log(string3.slice(-4))
console.log(string3.slice(-4, -1))
console.log(string.split(' '))
console.log(string.split(' ', 3)) // split은 뒤에 숫자 인자를 추가하면 앞에서부터 n개의 원소만 출력
console.log(string2.startsWith('aim'))
console.log(string2.startsWith('aim', 3))
console.log(string.substring(3, 5))
console.log(string.substring(-5, -3)) // substring은 slice와 다르게 음수 불가능
console.log(string3.toLowerCase())
console.log(string3.toUpperCase())
console.log(string.trim())
```

```
45
p
Respect yourself and others will respect you.We aim above the mark to hit the mark.
Respect yourself and others will respect you.We aim above the mark to hit the mark.Don't find fault, find a remedy.
Respect yourself and others will respect you.We aim above the mark to hit the mark.Don't find fault, find a remedy.
true
false
8
41
Respect yourself and others will respect you.Respect yourself and others will respect you.
Good yourself and others will respect you.
ect yourself and others will respect you.
esp
edy.
edy
[ 'Respect', 'yourself', 'and', 'others', 'will', 'respect', 'you.' ]
[ 'Respect', 'yourself', 'and' ]
false
true
pe

don't find fault, find a remedy.
DON'T FIND FAULT, FIND A REMEDY.
Respect yourself and others will respect you.
```

