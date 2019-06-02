import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo.js';
import TodoItem from './todoItem.js';

const App = (props)=>{
    return (<div>
        <Todo />
        <TodoItem />
    </div>)
}

export default connect(null, null)(App);