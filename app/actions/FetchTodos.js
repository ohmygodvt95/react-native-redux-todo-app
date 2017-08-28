import {FETCH_TODOS} from "./ActionTypes";

export function fetchTodos(){
    return {
        type: FETCH_TODOS,
        todos: [{id: 0, text: 'a'}, {id: 1, text: 'aaaaaaaa'}]
    }
}
