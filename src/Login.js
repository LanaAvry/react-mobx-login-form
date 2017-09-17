import React, { Component } from 'react';
import './Login.css';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

const response = {
    Auth: 'Denied'
};

class Login extends Component {
    constructor() {
        super();
        extendObservable(this, {
            loginForm: {
                name: '',
                password: '',
                status: ''
            }
        });
    }

    onChange = e => (this.loginForm[e.target.name] = e.target.value);

    onSubmit = e => {
        //     fetch('/login', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             Username: this.loginForm.name,
        //             Password: this.loginForm.password
        //         })
        //     })
        //         .then(data => data.json())
        //         .then(response => this.checkAuth(response));
        //         .catch( err => console.log("error", err))

        this.checkAuth(response);
    };

    checkAuth = ({ Auth }) => {
        switch (Auth) {
            case 'Denied':
                this.loginForm.status = 'denied';
                break;
            case 'Logged':
                this.loginForm.status = 'logged';
                break;
            default:
                console.log('another response');
        }
    };

    render() {
        return (
            <div className="loginForm">
                <header className="loginHeader">
                    <i className="fa fa-fire" aria-hidden="true" />
                    Login
                </header>
                <form action="/login" method="post">
                    <div className="loginField">
                        <label htmlFor="userLogin" />
                        <Input
                            type="text"
                            id="userLogin"
                            placeholder="Login"
                            name="name"
                            value={this.loginForm.name}
                            onChange={this.onChange}
                            className={
                                this.loginForm.status === 'denied'
                                    ? 'input--invalid'
                                    : ''
                            }
                        />
                    </div>
                    <div className="passwordField">
                        <label htmlFor="userPassword" />
                        <Input
                            type="password"
                            id="userPassword"
                            placeholder="Password"
                            name="password"
                            value={this.loginForm.password}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="button" onClick={this.onSubmit}>
                        Login
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        />
                    </button>
                    <p>{this.loginForm.status}</p>
                </form>
            </div>
        );
    }
}

const Input = observer(props => <input {...props} />);

export default observer(Login);
