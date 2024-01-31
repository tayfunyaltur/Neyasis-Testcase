// store/index.js
"use client";
import { applyMiddleware, createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import resourceActions from "./actions/resourceActions";

import rootReducer from "./reducers";

const fetcherMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
    switch (action.type) {
        case "FETCH_POPULAR_SEARCH":
            resourceActions.getPopulerSearches().then((popularSearch) => {
                const _originalResult = next({
                    ...action,
                    payload: popularSearch,
                });
                return _originalResult;
            });
            break;
        case "FETCH_OPEN_POSITIONS":
            resourceActions.getOpenPositions().then((openPositions) => {
                const _originalResult = next({
                    ...action,
                    payload: openPositions,
                });
                return _originalResult;
            });
            break;
        case "FETCH_PARTNERS":
            resourceActions.getPartnerURLS().then((partners) => {
                const _originalResult = next({
                    ...action,
                    payload: partners,
                });
                return _originalResult;
            });
            break;
        case "FETCH_SUGGESTIONS":
            resourceActions.getSuggestions().then((suggestions) => {
                const _originalResult = next({
                    ...action,
                    payload: suggestions,
                });
                return _originalResult;
            });
            break;
        default:
            return next(action);
    }
};

const middlewareEnhancer = applyMiddleware(fetcherMiddleware);

// Create the Redux store
const store = createStore(rootReducer, undefined, middlewareEnhancer);

// Export the store wrapped in the Provider
export const StoreProvider = ({ children }: any) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
