import {ADD_TODO, FETCH_TODOS, CHANGE_TODO} from "../actions/ActionTypes";

const initState = {
    todos: []
};

const todos = (state = initState, action) => {
    switch (action.type){
        case ADD_TODO:
            return [...state, action.todo];
        case FETCH_TODOS:
            return action.todos;
        case CHANGE_TODO:
            return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
};

export default todos;
