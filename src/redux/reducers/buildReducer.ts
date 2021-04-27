interface Build {
    type: string,
    color: string
}

export default function buildReducer(state = {}, action: Build) {
    switch(action.type) {
        case "CHANGE_BACKGROUND":
            return {
                ...state, 
                color: action.color
            }
        default:
            return state;
    }
}