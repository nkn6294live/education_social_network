import merge from 'lodash/merge'
import { combineReducers } from 'redux'

const entities = (state = {users: {}, classes:{}, events: {}, feed: {}}, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }

    return state
}

const rootReducer = combineReducers({
    entities
})

export default rootReducer