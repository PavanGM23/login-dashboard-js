import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    handleEvent(event) {
        event.preventDefault();
        let email = event.target.elements[0].value;
        let pwd = event.target.elements[1].value;

        let username = email.split('@')[0];

        if (this.isValid(email, pwd)) {

            this.props.handleSubmit(username);
            
        }


    }

    isValid(email, pwd) {

        let regex = /[A-Z]/;

        if(!pwd.match(regex)){
            alert("Password should contain one uppercase letter!");
            document.getElementById('pwd').value = "";

            return false;
        }
        else if ((email === 'Clarion@clarion.com') && (pwd === 'Clarion123')) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div className="col-md-3 col-md-offset-3">
                <h2>Login Page</h2>
                <form name="form" onSubmit={this.handleEvent}>
                    <div className={'form-group'}>
                        <label htmlFor="Username">Username</label>
                        <input type="email" id='uname' className="form-control" name="Username" />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='pwd' className="form-control" name="password" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginView;