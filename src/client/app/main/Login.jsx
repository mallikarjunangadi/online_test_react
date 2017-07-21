import React from 'react';
import { browserHistory } from 'react-router-dom';

class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    };
  }

  handleUserChange(e) {
    this.setState({ user: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  login(e) {
  //  e.preventDefault();
    if (this.state.user === '123' && this.state.password === '123') {
     // alert("Login success");
      console.log("login success");
      //    browserHistory.push('/quiz');
      this.props.history.push('/userHome')
    } else {
      console.log("autentication failed");
    };
  }  

  render() {
    return (
      <div className="loginDiv center-block">
        <h2>Login</h2>
        <form role="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" value={this.state.user} onChange={this.handleUserChange.bind(this)} className="form-control" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} className="form-control" id="password" ref="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login