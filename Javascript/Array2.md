### Arry map

```jsx
const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const addDays = (day, index) => `#${index + 1} ๐${day}`;

const smilingDays = days.map(addDays);

console.log(smilingDays);
//['#1 ๐Mon','#2 ๐Tue','#3 ๐Wed','#4 ๐Thurs','#5 ๐Fri'];
```

### Arry filter

```jsx
const numbers = [2, 4, 10, 40, 452, 1, 0, 63];

const testCondition = (number) => number > 15;

const biggerThan15 = numbers.filter(testCondition);

console.log(biggerThan15);
//[40, 452, 63]
```

### Array forEach

```jsx
let posts = ["hi", "hello", "bye"];

posts.push("new");

console.log(posts);
//['hi', 'hello', 'bye', 'new']
```

```jsx
let greetings = ["hi", "hello", "howdy", "suup"];

if (!greetings.includes("hello")) {
  greetings.push("hello");
}

console.log(greetings);
```
