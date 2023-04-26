import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./scss/index.scss"
import { Provider } from 'react-redux';
import store from './redux-app/stores';
import 'overlayscrollbars/overlayscrollbars.css';
import App from './App';
import WolfFileContexProvider from "./context/FileContex"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <WolfFileContexProvider>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </WolfFileContexProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
