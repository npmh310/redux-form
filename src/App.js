
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import UserForm  from './components/UserForm';

function App() {
  return (
    <Provider store={store}>
      <UserForm/>
    </Provider>
  );
}

export default App;
