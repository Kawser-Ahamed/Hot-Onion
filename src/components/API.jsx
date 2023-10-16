
export const initialState = {
    count : 1,
}

export const reducer = (state , action) =>{
    switch (action.type) {
        case 'ADD':
            return {count: state.count + 1}
        case 'REMOVE': 
           // eslint-disable-next-line no-case-declarations
           const newCount = state.count-1;
           return {count : newCount < 1 ? 1 : newCount}
        default:
            break;
    }
}

