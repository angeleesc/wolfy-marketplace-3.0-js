import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./scss/index.scss"
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import { Provider } from 'react-redux';
import store from './redux-app/stores';
import CheckoutModal from './template/modals/checkoutModal/CheckoutModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={router} />
      <CheckoutModal/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
