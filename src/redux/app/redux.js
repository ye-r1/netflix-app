//initialState
const initialState = {
    openSidebar : false,
    bestMovies: [26185, 26232, 26213, 26229, 26231, 26229, 26216, 26182, 26206, 26199],
}

//action
const Action = {
    Types: {
        UPDATE_STATE: "@@APP/UPDATE_STATE",
        GET_MOVIES: "@@APP/GET_MOVIES",
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            payload: props
        }),
        getMovies: () => ({
            type:Action.Types.GET_MOVIES,
        })
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}
    

export {reducer, Action}