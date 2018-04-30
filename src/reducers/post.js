import {SET_POST} from '../constants'

export default function post(state = {}, action) {
    switch (action.type) {
        case SET_POST: {
            return action.payload
        }
        default:
            return state;
    }
}