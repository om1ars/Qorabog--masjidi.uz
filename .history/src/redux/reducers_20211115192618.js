import { combineReducers } from "redux";
import quranReducer from "./slices/quranSlice";

singleQuran

const reducers = combineReducers({
    quran: quranReducer,
})

export default reducers;