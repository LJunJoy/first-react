import React from 'react';
import { connect } from 'react-redux';
import ActionCreator from './actionCreator.js';

const TodoItem = (props) => {
    const todos = props.todos.map((item) => {
        return (<li key={item} onClick={props.onDelItem}>{item}</li>);
    });
    return (<div>
        { todos }
    </div>);
}

function mapStateToProps(state){
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch){
    return {
        onDelItem: (e) => {
            const action = ActionCreator.getDelItemAction(e.target.innerText);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);