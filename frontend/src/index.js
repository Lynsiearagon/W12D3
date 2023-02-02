import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import configureStore from './store';


const store = configureStore(); 

if (process.env.NODE_ENV !== 'production') {
  window.store = store; 
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

// I believe the above would actually go in a different file on its own
// and then you would input 

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// Provider provides Redux Store to the Application 
// Browser Router sets up your routes throughout your App 
