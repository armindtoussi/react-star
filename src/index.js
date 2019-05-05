import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Home />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);