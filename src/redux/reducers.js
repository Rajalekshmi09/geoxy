import InitialState from "./store"

const appReducer = (state = InitialState, action) => {
    const newState = {}
    Object.assign(newState, state)
    switch (action.type) {
        case 'NAVIGATE_MAIN_PAGE':
            newState.mainPage = action.payload ? action.payload : "layerComponent"
            return newState
        default:
            return newState

    }
}
export default appReducer