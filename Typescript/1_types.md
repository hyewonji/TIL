# Types

## JS의 타입

- Primitive (원시타입) : `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, `undefined`
- Object (객체 타입) : `function`, `array`, ...

<br>

## TS의 타입

TS에서 사용하는 타입에는 `number`, `string`, `boolean`, `undefined`, `null`, `any`, `unknown`, `void`, `never`, `object` 등이 있다.<br>
이 중, `undefined`, `null`, `any`, `unknown`의 경우 코드의 명확성이 떨어지므로 꼭 필요한 경우가 아니면 사용을 지양한다.<br>
또한, `object` 타입은 모든 객체를 혀용하는 추상적인 타입이기 때문에 사용을 지양하고, 구체적인 타입을 지정하는것 이좋다.

<br>

- `number`, `string`, `boolean`
  ```jsx
  const age: number = 12;
  const str: string = "Hello!";
  const boal: boolean = true;
  ```
- `undefined`: 변수에 값이 할당되지 않았을 때 사용할 수 있다.
  ```jsx
  let age: number | undefined = undefined;
  age = 12;
  ```
- `null` : 값이 비어있을때 사용할 수 있다.
  ```jsx
  let item: string | null = null;
  item = "snack";
  ```
- `any` : 특정 타입을 지정하고 싶지 않을 때 사용하며 따로 타입체크를 하지 않는다. 만약, 이를 원하지 않는다면 `any`를 에러로 표시하는 `noImplicitAny` 컴파일러 플레그를 사용한다.
- `unknown`: 확실하지 않은 타입을 의미한다.
- `void` : 함수에서 리턴값이 없을경우 사용한다.
  ```jsx
  function print(): void {
    console.log("Hello world!");
    return;
  }
  ```
- `never` : 함수가 절대 반환하지 않을 경우 사용한다.

  ```jsx
  function neverReturn(message: string): never {
    // case 1. 에러 발생
    throw new Error(message);

    // case 2. 무한 루프
    while (true) {}
  }
  ```

<br>

## 활용

### 1. Function

**a. Optional Parameter<br>**
Optional Parameter 뒤에 '?'를 붙여주면 함수 호출시 해당 Parameter가 Optional한 값이 된다. 값을 전달받지 않으면 default 값이 `undefined`이다.

```jsx
function printName(firstName: string, lastName?: string) {
  console.log(firstName, lastName);
}

printName("gildong"); // gildong undefined
printName("gildong", "hong"); // gildong hong
```

**b. Default Value of Prameter**
Optional Parameter에 default 값이 undefined가 아닌 특정 값을 할당할 수 있다.이 방법은 자바스크립트에서도 사용되는 방법이다.

```jsx
function printName(firstName: string, lastName?: string = "park") {
  console.log(firstName, lastName);
}

printName("gildong"); // gildong park
printName("gildong", "hong"); // gildong hong
```

**c. Rest Parameter**
정해지지 않은 개수의 Prameter를 받을 경우 사용한다.

```jsx
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
```

### 2. Array
배열을 타입정의 하는 방법은 `number[]` 혹은 `Array<number>`가 있다.<br><br>
a. `readonly`<br>
절대 변경할 수 없음을 표현한다. 이를 배열에 사용할때는 `readonly number[]`의 방법만 쓸 수 있다.

b. Tuple<br>
서로 다른 타입의 값을 갖는 배열을 말한다.<br>
다른 타입의 데이터를 인덱스로만 구분할 수 있기 때문에 코드 가독성이 좋지 않다. 따라서, Tuple 사용을 지양하며 Object, Class로 대체해 사용하는걸 권장한다.(Interface, type alias 혹은 class 사용)

```jsx
let person: [string, number];
person = ['gildong', 21];

// ❌ Index로 값을 찾는것은 명시직이지 않다!
console.log(person[0], person[1]) // gildong 21

// ⭕️ 사용자가 이름을 정의해서 사용 (react의 useState)
const [name, age] = student
console.log(name, age) // gildong 21
```

_대체 방법은 추후 공부 예정이다_ 😛



## 참조

- Typescript 공식문서 - [Types]('https://www.typescriptlang.org/docs/handbook/2/everyday-types.html')
