import React from 'react';
import Header from './header';
import MortgageCalculator from './mortgageCalculator'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title='Professional ES6 React' />
                <MortgageCalculator principal="2000" years="20" rate="5" />
            </div>
        );
    }
}

export default App;