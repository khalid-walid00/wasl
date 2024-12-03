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
  "createVehicleSlice",
  "companiesSlice"
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// إعداد الـ Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

// تشغيل الـ Saga Middleware
sagaMiddleware.run(rootSaga);

// إعداد الـ Persistor
export const persistor = persistStore(store);
