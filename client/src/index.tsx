import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/AppRouter';

import { store } from './store';

import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>
)