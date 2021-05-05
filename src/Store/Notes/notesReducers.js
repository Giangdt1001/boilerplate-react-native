const initData = {
    name: 'Ha van duc',
};

const notesReducers = (state = initData, { type, payload }) => {
    switch (type) {
        case 'TEST':
            return { ...state, name: "hshhshsh" };
        default:
            return state;
    }
};
export default notesReducers;