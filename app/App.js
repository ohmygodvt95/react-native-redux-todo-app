import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './config/ConfigStore';
import Main from './components/Main';

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Main />
            </Provider>
        );
    }
}

