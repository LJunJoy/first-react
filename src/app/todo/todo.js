import React,{ Component } from 'react';
import { connect } from 'react-redux';
import ActionCreator from './actionCreator.js';

class Todo extends Component{
    constructor(props){
        super(props);

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(){
        this.props.onAddItem(this.props.inputValue);
    }

    render(){
        return (<div>
            <input type='text' value={this.props.inputValue} onChange={this.props.onChangeItem}></input>
            <button onClick={this.handleAddItem} >点击添加</button>
        </div>);
    }
}

function mapStateToProps(state){
    return {
        inputValue: state.inputValue
    }
}

function mapDispatchToProps(dispatch){
    return {
        onChangeItem: (e) => {
            dispatch(ActionCreator.getItemChangeAction(e.target.value));
        },
        onAddItem: (item) => {
            dispatch(ActionCreator.getAddItemAction(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);