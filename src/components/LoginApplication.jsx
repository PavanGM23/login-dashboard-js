import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import Login from './LoginView';
import Dash from './DashboardView';


class LoginApplication extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    history.push('/dash');

    this.setState({
      userName: value
    })
  }



  render() {

    return (
      <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={()=> (<Login handleSubmit={this.handleSubmit}/>)} />
          <Route path="/dash" render={(props) => (<Dash user={this.state.userName} />)} />
        </Switch>
      </Router>
      </div>

    );
  }
}

export default LoginApplication;
