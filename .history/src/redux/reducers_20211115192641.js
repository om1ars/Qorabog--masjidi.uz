import { combineReducers } from "redux";
import quranReducer from "./slices/quranSlice";
import singleQuran from "./slices/singleQuran";



const reducers = combineReducers({
    quran: quranReducer,
    single: singleQuran
})

export default reducers;