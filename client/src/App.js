import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
          <ItemModal />
          <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  };
}

export default App;