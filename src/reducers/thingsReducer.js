const initState = { all: ['hummus', 'celery', 'cucumber']}

const thingsReducer = (state=initState, action) => {
    switch(action.type){
        case "ADD":
            const newItem = action.payload
            return { ...state, all: [ ...state.all, newItem]};
        default:
            return state;
    }
}

export default thingsReducer;