import { combineReducers } from "redux";
import quranReducer from "./slices/quranSlice";
import singleQuranReducer from "./slices/singleQuran";



const reducers = combineReducers({
    quran: quranReducer,
    single: singleQuranReducer
})

export default reducers;