import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Provider as UnstatedProvider } from 'unstated';
import { RecoilRoot } from 'recoil';
import { store } from './stores/redux-toolkit/store';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UnstatedProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </UnstatedProvider>
    </Provider>
  </React.StrictMode>
);
