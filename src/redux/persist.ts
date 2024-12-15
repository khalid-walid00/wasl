import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducer from './store';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig: any = {
  key: 'root',
  storage,
  blacklist: [
  "companiesSlice",
  "forgetPassword",
  "vehiclesSlice",
  "driversSlice",
  "requestsLogSlice"
  ],
  whitelist: [
    
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
