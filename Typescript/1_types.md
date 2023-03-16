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
    const str: string = 'Hello!';
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
    item = 'snack';
  ```
- `any` : 특정 타입을 지정하고 싶지 않을 때 사용하며 따로 타입체크를 하지 않는다. 만약, 이를 원하지 않는다면 `any`를 에러로 표시하는 `noImplicitAny` 컴파일러 플레그를 사용한다.
- `unknown`: 확실하지 않은 타입을 의미한다.
- `void` : 함수에서 리턴값이 없을경우 사용한다.
  ```jsx
    function print(): void {
      console.log('Hello world!');
      return;
    }
  ```
- `never` : 함수가 절대 반환하지 않을 경우 사용한다.
  ```jsx
    function neverReturn (message: string): never {
      // case 1. 에러 발생
      throw new Error(message);

      // case 2. 무한 루프
      while(true) {}
    }
  ```
- Arrays : `number[]` 혹은 `Array<number>`로 표현

<br>

## 참조
- Typescript 공식문서 - [Types]('https://www.typescriptlang.org/docs/handbook/2/everyday-types.html')