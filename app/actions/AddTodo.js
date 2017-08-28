import {ADD_TODO} from "./ActionTypes";
let id = 3;
export function addTodo(text){
    return {
        type: ADD_TODO,
        todo: {id: ++id, text: text, completed: false}
    }
}
