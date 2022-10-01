import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// root reducer
import rootReducer from "./reducers/index";

// create store with add middleware thunk for process asyncronous
const store = createStore(rootReducer, applyMiddleware(thunk));

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: { serviceApi },
//       },
//     }),
// });

export default store;
