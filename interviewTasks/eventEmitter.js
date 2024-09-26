
export class EventEmitter {
    constructor(){
         this._events = {}

    }

    on(event, listener){
        if(!this._events[event]){
            this._events[event] = []
        }
        this._events[event].push(listener)
    }

    off(event, listener){
        if(this._events[event]){
            const eventIndex = this._events[event].indexOf(listener)
            //Если слушатель найден 
            if(eventIndex !== -1){
                this._events[event].splice(eventIndex, 1)
            }
        }
    }

    emit(event, ...args){
        if(this._events[event]){
            this._events[event].forEach((listener)=> listener(...args))
        }
    }

    once(event, listener){
        const wrapper = (...args) => {
            listener(...args)
            this.off(event, wrapper)
        }
        this.on(event, wrapper)
    }
}

// const emitter = new EventEmitter()

// console.log('1',emitter)

// emitter.on('greet', (name) => {
//     console.log(`Hello, ${name}!`);
// });
// emitter.on('auphviderzein', (name) => {
//     console.log(`Bay, ${name}!`);
// });

// emitter.emit('greet', 'Pupkin')


// console.log('2',emitter)
// emitter.emit('auphviderzein', 'Pupkin')
// console.log('________----________')
// console.log('3',emitter)