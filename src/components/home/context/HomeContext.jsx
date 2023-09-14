import { createContext, useReducer } from "react";
import { actions } from "./HomeActions"
import { HomeReducer } from "./HomeReducer";

let intialState = {
    userID: {
        data: null,
        loading: false,
        successful: false,
        error: null,
    }
}

export const HomeContext = createContext({})
const HomeProvider = ({ children }) => {

    const [state, dispatch] = useReducer(HomeReducer, intialState)

    return (
        <HomeContext.Provider value={{
            state, dispatch, actions
        }}>
            {children}
        </HomeContext.Provider>
    );
};

export default HomeProvider;