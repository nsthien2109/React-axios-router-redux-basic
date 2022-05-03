import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducer/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(rootReducer, composeWithDevTools());
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
