const initialState = {
    user: {},
};

const userReducer = (
    state = initialState,
    action: { payload: any; type: string }
) => {
    switch (action.type) {
        case "FETCH_USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
