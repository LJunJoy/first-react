import ActionTypes from "./actionTypes.js"

var initState={
    inputValue:"1234",
    todos:[]
}
export default (state=initState, action) => {
    switch(action.type){
        case ActionTypes.ITEM_CHANGE:
            return {...state, inputValue : action.value};
        case ActionTypes.ADD_ITEM:
            var newTodos = [...state.todos];
            newTodos.push(action.value);
            return {...state, todos : newTodos};
        case ActionTypes.DEL_ITEM:
            var newTodos = state.todos.filter((item) => { return item !== action.value});
            console.log(newTodos)         
            return {...state, todos : newTodos};
        default:
            return state;
    }
}