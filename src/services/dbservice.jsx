import React from 'react-dom';
import when from 'when';

class DbService extends React.Component {

  login(username, password) {

    return when(request({
      url: 'http://localhost:3001/sessions/create',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    })).then(function(response) {
        var jwt = response.id_token;
        LoginActions.loginUser(jwt);
        return true;
    });
  }
}

export default DbService