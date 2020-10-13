const initalState={
    state:false
};
export default function login(state=initalState,action) {
    switch (action.type) {
        case 1:
            return {
                ...state,
                state:action.state,
                username:action.username
            }
        default:
            return state
    }
}
