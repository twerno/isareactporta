type State = number;
type Action = {
    type: string
}

const reducer = (state: State = 0, action: Action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

const store = createStore(reducer);

// ZWIEKSZ WARTOSC O 1
store.dispatch({ type: 'INCREMENT' })