import React from 'react';

class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(event) {
        event.preventDefault();
        let val = event.target.elements[0].value;

        this.props.handleSubmit(val);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEvent}>
                    EMAIL: <input type="email" id='user' />
                    PWD: <input type="password" />
                    <button >Login</button>
                </form>
            </div>
        );
    }
}

export default LoginView;