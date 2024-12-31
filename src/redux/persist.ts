import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, createTransform } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducer from './store';
import rootSaga from './saga';

// إعداد الـ transform لإزالة errors من الـ state
const removeErrorsTransform = createTransform(
  (inboundState: any) => {
    // إزالة الـ errors من state قبل تخزينه
    const { errors, ...rest } = inboundState;
    return rest;
  },
  (outboundState) => {
    return outboundState; // لا حاجة لتعديل الـ state عند استعادته
  }
);

const sagaMiddleware = createSagaMiddleware();

const persistConfig: any = {
  key: 'root',
  storage,
  blacklist: [
    "forgetPassword", 
  ],
  transforms: [removeErrorsTransform],
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
