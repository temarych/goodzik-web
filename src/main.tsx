import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NextUIProvider } from '@nextui-org/react';
import { persistor, store } from './store';
import { App } from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </PersistGate>
    </StoreProvider>
  </StrictMode>,
);
