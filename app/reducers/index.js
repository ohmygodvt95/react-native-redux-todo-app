import { combineReducers } from 'redux'
import todos from "./TodoReducer";

export const rootReducer = combineReducers({
    todos
});
