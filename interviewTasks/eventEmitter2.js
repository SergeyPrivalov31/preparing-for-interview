class EventEmitter2 {
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
        const eventIndex = this._events[event].indexOf(listener)
        if(eventIndex !== -1){
            this._events[event].splice(eventIndex,1)
        }
    }

    emit(event, ...args){
        if(this._events[event]){
            this._events[event].forEach(listener => listener(...args))
        }
    }

    once(event, listener){
        const wrapper = (...args) => {
            listener(...args)
            this.off(event, wrapper)
        }
        this.on(event,wrapper)
    }
}

const emmiterFirst = new EventEmitter2();

emmiterFirst.on('HI', (name) => {
    console.log(`Hallo, ${name}`);
});
emmiterFirst.emit('HI', 'SERG');

emmiterFirst.on('BUY', (name) => {
    console.log(`Buy my friend, ${name}`);
});

emmiterFirst.once('GREAT', (name) => {
    console.log(`Great job, ${name} my bro`);
});

emmiterFirst.emit('HI', 'GUP');
emmiterFirst.emit('GREAT', 'SERG');
emmiterFirst.emit('GREAT', 'SERG');
emmiterFirst.emit('GREAT', 'SERG');

emmiterFirst.emit('BUY', 'SERG');