import {handleActions, createAction} from "redux-actions";
import {get} from "lodash";
import {createSelector} from "reselect";


export const getPhrases = createAction("GET_PHRASES");

export default handleActions({
    [getPhrases]: ({phrases, names}) => {
        console.log("HelloWorld");
        return {phrases, names}
    }
},{
    phrases: ["Hello World"],
    names: ["Alex"]
})


const REDUCER_NAME = "HELLO_WORLD_REDUCER";

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const phrasesSelector = createSelector(stateSelector, (state) => get(state, "phrases"));