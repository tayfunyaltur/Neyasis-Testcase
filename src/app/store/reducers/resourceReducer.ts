const initialState = {
    popularSearch: [],
    openPositions: [],
    partnerURLS: [],
    suggestions: [],
};

const resourceReducer = (
    state = initialState,
    action: { payload: any; type: string }
) => {
    switch (action.type) {
        case "FETCH_POPULAR_SEARCH":
            return {
                ...state,
                popularSearch: action.payload,
            };
        case "FETCH_OPEN_POSITIONS":
            return {
                ...state,
                openPositions: action.payload,
            };
        case "FETCH_PARTNERS":
            return {
                ...state,
                partnerURLS: action.payload,
            };
        case "FETCH_SUGGESTIONS":
            return {
                ...state,
                suggestions: action.payload,
            };
        default:
            return state;
    }
};

export default resourceReducer;
