import {combineReducers} from 'redux'
import data from '../data'

const wordList = (state = data, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    wordList
})

export default reducers