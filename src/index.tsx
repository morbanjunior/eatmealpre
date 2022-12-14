import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import { getTotals } from './redux/cartSlice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// interface Props{
//   payload: any;
//   type: string;
// }

store.dispatch(getTotals())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


