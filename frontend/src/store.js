import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
});

let intitialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  intitialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
