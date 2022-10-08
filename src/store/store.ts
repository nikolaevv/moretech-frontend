
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { 
  authAPI, 
  shopItemAPI, 
  userAPI, 
  nftItemAPI, 
  statAPI, 
  taskAPI, 
  taskAssignAPI 
} from 'services';
import { authTokenSlice } from "store/reducers/AuthTokenSlice";

const rootReducer = combineReducers({
  authToken: authTokenSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [shopItemAPI.reducerPath]: shopItemAPI.reducer,
  [nftItemAPI.reducerPath]: nftItemAPI.reducer,
  [statAPI.reducerPath]: statAPI.reducer,
  [taskAPI.reducerPath]: taskAPI.reducer,
  [taskAssignAPI.reducerPath]: taskAssignAPI.reducer
})

export const setupStore = () => {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(authAPI.middleware)
          .concat(userAPI.middleware)
          .concat(shopItemAPI.middleware)
          .concat(nftItemAPI.middleware)
          .concat(statAPI.middleware)
          .concat(taskAPI.middleware)
          .concat(taskAssignAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
