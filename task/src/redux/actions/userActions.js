import { ActionTypes } from '../constants/actionTypes';

export const setUsers = (users) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    }
}

export const setPageCount = (pageCount) => {
    return {
        type: ActionTypes.SET_PAGE_COUNT,
        payload: pageCount,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: ActionTypes.SET_CURRENT_PAGE,
        payload: currentPage,
    }
}

export const selectedUser = (user) => {
    return {
        type: ActionTypes.SELECTED_USER,
        payload: user,
    }
}

export const changeUserEmail = (email) => {
    return {
        type: ActionTypes.CHANGE_EMAIL,
        payload: email,
    }
}

export const removeSelectedUser = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_USER,
    }
}