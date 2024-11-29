"use client"
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '~/redux/persist';
import { PersistGate } from 'redux-persist/integration/react';

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
