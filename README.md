majority
=======
[![total downloads of majority](https://img.shields.io/npm/dt/majority.svg)](https://www.npmjs.com/package/majority)
[![majority's License](https://img.shields.io/npm/l/majority.svg)](https://www.npmjs.com/package/majority)
[![latest version of majority](https://img.shields.io/npm/v/majority.svg)](https://www.npmjs.com/package/majority)

*A two-bit library to get the most popular value.*

```js
(new Majority(1, 1, 2, 2, 2, 3, 3)).value()
// 2

const majority = new Majority()

console.log(majority.value('foo'))
// foo

for (let i = 0; i < 5; ++i) majority.feed('Trump')

console.log(majority.value())
// Trump

for (let i = 0; i < 10; ++i) majority.feed('Biden')

for (let i = 0; i < 6; ++i) majority.feed('Hilary')

console.log(majority.value())
// Biden

```