import React, { Component } from 'react';
import rootSaga from 'state/sagas';
import { Provider } from 'react-redux';
import { Root } from 'components';
import configureStore from 'store/configureStore';

const store = configureStore();
store.runSaga(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
