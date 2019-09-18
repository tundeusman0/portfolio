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
  componentDidMount() {
    // store.dispatch({ type: 'LOADING' });
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppRouter />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
