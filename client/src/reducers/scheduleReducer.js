import { FETCH_USER_SCHEDULES, CREATE_SCHEDULE } from "../actions/types";
import _ from "lodash";
export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_USER_SCHEDULES:
            return { ...state, ..._.mapKeys(action.payload, "_id") };
        case CREATE_SCHEDULE:
            return { [action.payload._id]: action.payload, ...state };
        default:
            return state;
    }
}
