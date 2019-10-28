# :keyboard: 03장. 변수와 값

<br>

## 1. 변수

### 1.1 변수 선언

- `var sum;`

  - `var` : 자바스크립트 키워드로 변수를 선언하기 위한 선언자, 자바스크립트에는 변수 타입이 없으므로 변수 선언자는 `var` 하나뿐임
  - 위 문장이 실행되면 메모리에 `sum` 이라는 이름이 붙은 영역이 생성됨

- `var sum, a;`

  - 쉼표를 사용하면 변수 여러 개를 한 개의 문장으로 선언할 수 있음

- `var x = 5;`

  - 대입 연산자(`=`)를 사용하면 변수에 값을 대입할 수 있음
  - `console.log(x);`로 값을 출력할 수 있음

- `var a = 1, b = 2, c = 3;`

  - 변수를 여러 개 선언하고 초기값 설정을 쉼표로 구분하여 한 문장만 사용해서 표현할 수 있음

- 만약 var 문으로 선언하지 않은 변수 값을 읽으려고 시도하면 참조 오류가 발생한다.

  ```javascript
  console.log(x);
  ```

  ```
  ReferenceError : x is not defined
  ```

- 그러나 var 문으로 선언하지 않은 변수에 값을 대입할 때는 오류가 발생하지 않는다.

  변수를 선언하지 않은 상태에서 값을 대입하면 자바스크립트 엔진이 그 변수를 자동으로 전역 변수로 선언하기 때문이다. 추후 4장에서 `전역 변수`에 대해 설명할 때 다시 언급된다.

  ```javascript
  x = 2;
  console.log(x);
  ```

  ```
  2
  ```

- 변수를 선언하지 않고 변수를 사용하는 행위는 버그의 원인이 될 수 있다.

<br>

### 1.2 변수의 명명 규칙

- 사용할 수 있는 문자는 알파벳(a~z, A~Z), 숫자(0~9), 밑줄(_), 달러 기호($)다.

- 첫 글자로는 숫자를 사용할 수 없다. 즉, 첫 글자는 알파벳(a~z, A~Z), 밑줄(_), 달러 기호($) 중 하나여야 한다.

- 예약어를 식별자로 사용할 수 없다.(▼예약어 예시)

  ```
  break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, false, finally, for, function, if, import, in, instanceof, new, null, return, super, switch, this, throw, true, try, typeof, var, void, while, with, yield
  ```

<br>

## 2. 데이터 타입

(작성중...)