import React from 'react';
import { connect } from 'react-redux';
import { getItemChangeAction, getAddItemAction } from './actionCreator.js';

const Todo = (props)=>{
    return (<div>
        <input type="text" value={props.inputValue} onChange={props.onItemChange} />
        <button onClick={props.onAddItem} >添加任务</button>
    </div>);
}

function mapStateToProps(state){
    console.log(state);
    return {
        inputValue: state.inputValue
    }
}

function mapDispatchToProps(dispatch, ownProps){    
    return {
        onItemChange:(e)=>{
            const action = getItemChangeAction(e.target.value);
            dispatch(action);
        },
        onAddItem:()=>{
            console.log(ownProps);
            const action = getAddItemAction(ownProps.inputValue);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

/* 错误分析：
这里本质上是 button的click回调中要访问input的值（实时同步并存储在store中），即mapDispatchToProps的onAddItem 中要访问store的属性值。
react-redux的mapDispatchToProps提供了第2个形参ownProps访问容器组件的props对象
解决办法是这里不用无状态组件作UI组件，而是用class，然后不把mapDispatchToProps的onAddItem直接作为button的click回调，而是另外写一个回调，
在这个回调中调用onAddItem，并传入input的值。
*/
