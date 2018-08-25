import { createStore, combineReducers } from "redux";
import { restaurantReducer } from "../src/components/Reducer/RestaurantReducer";

const rootReducer = combineReducers({
  restaurantReducer
});

const store = createStore(rootReducer);

export default store;
