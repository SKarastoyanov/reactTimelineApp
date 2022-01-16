import { createStore, combineReducers} from "redux";
import carsReducer from "./store/reducers/cars";
import authenticationReducer from "./store/reducers/authentication";

const rootReducer = combineReducers({
    cars: carsReducer,
    auth: authenticationReducer
});

const store = createStore(rootReducer);

export default store;