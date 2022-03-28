import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    users: [],
    currentPage: 1,
    pageCount: 0,
    size: 5
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return { ...state, users: payload };
        case ActionTypes.SET_PAGE_COUNT:
            return { ...state, pageCount: payload };
        case ActionTypes.SET_CURRENT_PAGE:
            return { ...state, currentPage: payload };
        default:
            return state;
    }
}

export const selectedUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_USER:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_USER:
            return {};
        case ActionTypes.CHANGE_EMAIL:
            return { ...state, email: payload };
        default:
            return state;
    }
}

