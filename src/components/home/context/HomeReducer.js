export const HomeReducer = (state, action) => {
    switch (action.type) {
        case 'CHECK_USER_ID_LOADING':
            return {
                ...state,
                userID: {
                    ...state.userID,
                    data: null,
                    loading: true,
                    successful: false,
                    error: null,
                },
            };
        case 'CHECK_USER_ID_SUCCESSFUL':
            return {
                ...state,
                userID: {
                    ...state.userID,
                    data: action.payload.data,
                    loading: false,
                    successful: true,
                    error: null,
                },
            };
        case 'CHECK_USER_ID_ERROR':
            return {
                ...state,
                userID: {
                    ...state.userID,
                    data: null,
                    loading: false,
                    successful: false,
                    error: action.payload.error,
                },
            };
        default:
            return state;
    }
}