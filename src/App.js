import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import Header from './components/Header';
import Dashboard from './components/Dashboard';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-content">
                    <Dashboard />
                </div>
            </div>
        );
    }
}

export default App;
