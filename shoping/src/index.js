import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import './style.css'
import App from './componets/App/App';
import * as ServiceWorker from './ServiceWorker';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(
  <React.StrictMode>
     <App ></App>
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ServiceWorker.unregister();
