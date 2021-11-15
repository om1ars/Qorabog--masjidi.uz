import { combineReducers } from "redux";
import quranReducer from "./slices/quranSlice";
import singleQuran from "./slices/singleQuran";

singleQuran

const reducers = combineReducers({
    quran: quranReducer,
})

export default reducers;