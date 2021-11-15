import { combineReducers } from "redux";
import quranReducer from "./slices/quranSlice";


const reducers = combineReducers({
    quran: quranReducer
})

export default reducers;