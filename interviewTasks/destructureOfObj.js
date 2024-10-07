// const { foo, bar } = { foo: 1, bar: 2 }
// {foo 1:  , bar: 2}
// const { foo: bar, bar: foo } = { foo: 1, bar: 2 }
// {foo: 2, bar: 1}
const { foo: [bar], bar: [foo] } = { foo: [1], bar: [2] }
// // {foo: [2], bar: 1 }
// const { foo: [bar], bar: foo } = { foo: [1], bar: [{ baz: 3 }] }
// // {foo: { baz: 3 }, bar: 1}
// const { foo: [bar], bar: [{ baz: foo }] } = { foo: [1], bar: [{ baz: 3 }] }
// // {foo: { baz: 3 } , bar: {baz: 1}}
// const value = {
//     foo: [{ baz: 1 }],
//     baz: 2
// };
// const { foo: [{ baz: foo }], bar: { baz: bar } = { baz: 3 } } = value;
// // {foo: , bar: }
console.log({foo, bar})

// const user = {
//     id: 1,
//     info: {
//         name: 'Bob',
//         address: {
//             city: 'New York',
//             zip: '10001'
//         }
//     }
// };

// const { info: { name, address: { city } } } = user;

// console.log(name); // "Bob"
// console.log(city); // "New York"