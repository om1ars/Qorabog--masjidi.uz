import { combineReducers } from "redux";
import quranReducer from "./slices/quranSlice";
import singleQuran from "./slices/singleQuran";

singQ

const reducers = combineReducers({
    quran: quranReducer,
})

export default reducers;