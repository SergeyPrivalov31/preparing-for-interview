// (function q1(){
//     const f0 = () => {console.log(0); return 0}
//     const f1 = () => {console.log(1); return 1}
//     const f2 = () => {console.log(2); return 2}
//     const f3 = () => {console.log(3); return 3}
//     const f4 = () => {console.log(4); return 4}

//     console.log(f0() || f1() && f2() || f3() && f4())
// })()

// (function q2(){
//     const person = {
//         name: 'Vasya'
//     };
//     (function (person){
//         person = {
//             name: 'Petya'
//         }
//     })(person);
// console.log(person.name);
// })()

// (function q3(){
//     try {
//         let x = 4;
//         if(true) {
//             console.log("x_let:",x);//error
//             let x = 5;
//         }
//     } catch (err) {
//         console.log("x_let:error");
//     }

//     try {
//         const y = 4;
//         if(true) {
//             const y = 5;
//             console.log("y_const_1:",y);//5
//         }
//         console.log("y_const_2:",y)//4
//     } catch(err){
//         console.log("y_const_1:error" )
//     }
// })()

function makeGroup() {
    let people = [];

    let i = 0
    while(i < 10){
        let man = function () {
            console.log(i);
        }
        people.push(man)
        i++
    }
    return people
}

let group = makeGroup();

group[0]();
group[5]();

(function q5(){
    let baz = 0;
    
    let foo = {
        bar1: function(){ return this.baz},
        bar2: () => this.baz,
        baz: 1
    }
    let fooCopy = {
        bar1: foo.bar1,
        bar2: foo.bar2,
        baz: 2
    }

    console.log(fooCopy.bar1());
    console.log(fooCopy.bar2());
})()

// (function q6() {
//     const p = new Promise((_,reject) => {
//         setTimeout(() => {
//             console.log('reject')//1
//             reject();
//         },2000)
//     })
    
//     p.then(
//         () => console.log('10'),
//         () => console.log('11')//2
//     ).then(
//         () => console.log('13'),//last
//         () => console.log('14')
//     )

//     p.then(
//         () => console.log('18'),
//         () => console.log('19')//3
//     )

//     p.then(
//         () => console.log('23'),
//         () => console.log('24')//4
//     ) 
// })()

