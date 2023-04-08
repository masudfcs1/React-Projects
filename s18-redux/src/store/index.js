import { createStore } from 'react-redux'

const counterReducer = (state={counter: 0},action) => {
    
    if(action.type ==='increment'){
        return state.counter + 1
    }

    else  if(action.type ==='decrement'){
        return state.counter - 1
    }
    
    return state
}

const store = createStore(counterReducer)

export default store