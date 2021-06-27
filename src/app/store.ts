import { configureStore } from "@reduxjs/toolkit";
import tasksModule from "./modules/tasksModule";

// const rootReducer = combineReducers({
//   tasks: tasksModule.reducer,
// });

const store = configureStore({
  reducer: {
    tasks: tasksModule.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
