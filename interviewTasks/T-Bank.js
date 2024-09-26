console.log(1)

Promise.resolve().then(()=> console.log(2))

console.log(3)

setTimeout(()=> console.log(4))

console.log(5)
const foo = () => {
    console.log('foo')
    return Promise.resolve(5).then(foo)
}
foo()


//1,3,5,foo....