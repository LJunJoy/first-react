import ActionTypes from "./actionTypes.js";

const ActionCreator = {
    getItemChangeAction(text){
        return {
            type: ActionTypes.ITEM_CHANGE,
            value: text
        }
    },
    getAddItemAction(text){
        return {
            type: ActionTypes.ADD_ITEM,
            value: text
        }
    },
    getDelItemAction(text){
        return {
            type: ActionTypes.DEL_ITEM,
            value: text
        }
    }
}
export default ActionCreator;