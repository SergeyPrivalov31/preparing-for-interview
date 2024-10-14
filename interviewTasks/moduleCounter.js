const makeCounter = function(){
    let privatCounter = 0
    function setPrivatCounter(value){
        privatCounter += value
    }
    return {
        increment: function(){
            setPrivatCounter(1)
        },
        decrement: function(){
            setPrivatCounter(-1)
        },
        value: function(){
            return privatCounter
        },

    }
}

const counter1 = makeCounter()
const counter2 = makeCounter()

counter1.increment()
counter1.increment()
counter1.increment()
counter1.increment()
counter1.increment()
console.log('counter1 ->',counter1.value())
counter2.increment()
counter2.increment()
counter1.decrement()
console.log('counter1 ->',counter1.value())
console.log('counter2 ->',counter2.value())