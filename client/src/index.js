import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import './styles/form.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

const store = configStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
