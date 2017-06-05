import EventEmitter from 'events';
import deepAssign from 'deep-assign';

class Store extends EventEmitter{
    constructor(){
        super();
        this.state = {
            showFilter : false
        }
    }

    update(state){
        this.state = deepAssign(
            this.state,
            state
        )
        this.emit('change');
    }
}

export let store = new Store();