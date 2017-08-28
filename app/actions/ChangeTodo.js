import {CHANGE_TODO} from "./ActionTypes";

export function changeTodo(id){
    return {
        type: CHANGE_TODO,
        id
    }
}
