import { createStore } from "redux";

const initState = {
    value : 0
};

const CounterReducer = (state=initState, action) =>
{
    console.log("jhjh : ", action, state.value)
    switch(action.type)
    {
        case "INCREMENT":
            return{
                ...state,
                value : state.value + 1
            }
        case "DECREMENT":
                return{
                    ...state,
                    value : state.value - 1
                }
        default:
            return state
    }
}

const Store = createStore(CounterReducer)

export {CounterReducer}
export {Store}