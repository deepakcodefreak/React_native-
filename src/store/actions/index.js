
export const addPlace = () => {
    return {
        type: 'ADD_PLACE',
    }
};

export const deletePlace = () => {
    return {
        type: 'DELETE_PLACE'
    }
};

export const selectPlace = (key) => {
    return {
        type: 'SELECT_PLACE',
        placeKey:key
    }
};

export const deselectPlace = () => {
    return {
        type: 'DESELECT_PLACE'
    }
};

export const changeText = (text) => {
    return {
        type: 'CHANGE_TEXT',
        text:text
    }
};