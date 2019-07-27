export const ADD_ITEM = "ADD_ITEM"
export const UPDATE_ITEM = "UPDATE_ITEM"


export function addItem(data, nameOfClass) {
    return { 
        type: ADD_ITEM,
        payload: {
            nameOfClass,
            data
        }
    }
}

export function updateItem(data, nameOfClass) {
    return {
        type: UPDATE_ITEM,
        payload: {
            nameOfClass,
            data
        } 
    }
}