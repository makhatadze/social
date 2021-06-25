import {INITIALIZED_SUCCESS} from "../types";


/**
 * App Initialized Success
 */
export const initializedSuccess = () => (dispatch: Function) => dispatch({type: INITIALIZED_SUCCESS});


/**
 * @TODO if backend services have access return true
 * Initialize App
 */
export const initializeApp = () => (dispatch: any) => {
    dispatch(initializedSuccess())
}
