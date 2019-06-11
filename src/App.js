import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Layout from './layouts/Layout';


const store = configureStore();
function App() {
  return <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>
}

export default App;
