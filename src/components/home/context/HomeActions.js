import HomeUseCase from "../../../lib/domain/useCases/home/HomeUseCase";

const checkUserID = (obj) => async (dispatch) => {
    try {
        dispatch({ type: "CHECK_USER_ID_LOADING" });
  
        const res = await new HomeUseCase().checkUserID(obj);
        
        dispatch({ type: "CHECK_USER_ID_SUCCESSFUL", payload: { data: res } });
    } catch (error) {
        console.log("Error calling action", error)
        dispatch({ type: "CHECK_USER_ID_ERROR", payload: { error: error } });
    }
}

export const actions = {
    checkUserID
}