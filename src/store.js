import { createStore, combineReducers} from "redux";
import carsReducer from "./store/reducers/cars";
import loginReducer from "./store/reducers/login";

const rootReducer = combineReducers({
    cars: carsReducer,
    login: loginReducer
});

const store = createStore(rootReducer);

export default store;