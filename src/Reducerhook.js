import React, {useReducer} from "react";

const initialState = { count: 0 };

const reducerFun = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };

        default:
            return state;
    }
        
    return state;
}

function Reducerhook() {
    const [state, dispatch] = useReducer(reducerFun, initialState)

    return (
        <div>
            <div>I am Reducer hook</div>
            <div>count from Reducer Hooks: {state.count}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>clickMe</button>
        </div>
    )
}

export default Reducerhook;