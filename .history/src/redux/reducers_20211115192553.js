import { combineReducers } from "redux";
import quranReducer from "./slices/quranSlice";

singleQ

const reducers = combineReducers({
    quran: quranReducer,
})

export default reducers;