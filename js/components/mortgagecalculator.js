import React from 'react';
import PaymentCalculator from '../business/paymentcalculator';
import AmortizationChart from './amortizationchart'

class MortgageCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            principal: this.props.principal,
            years: this.props.years,
            rate: this.props.rate
        };
    }

    setPrincipal(event) {
        this.setState({ principal: event.target.value });
    }

    setYears(event) {
        this.setState({ years: event.target.value });
    }

    setInterestRate(event) {
        this.setState({ rate: event.target.value });
    }

    render() {
        let { principal, years, rate } = this.state;
        let { monthlyPayment, amortization } =
            PaymentCalculator.calculatePayment(principal, years, rate);
        return (
            <div className='content'>
                <div className='form'>
                    <div>
                        <label>Principal: </label>
                        <input type='text' value={principal}
                            onChange={this.setPrincipal.bind(this)} />
                    </div>

                    <div>
                        <label>Years: </label>
                        <input type='text' value={years}
                            onChange={this.setYears.bind(this)} />
                    </div>

                    <div>
                        <label>Interest rate: </label>
                        <input type='text' value={rate}
                            onChange={this.setInterestRate.bind(this)} />
                    </div>
                </div>
                <div>Monthly Payment:
                    <span className='currency'>
                        {Number(monthlyPayment.toFixed(2)).toLocaleString()}
                    </span>
                </div>
                <span />
                <div>
                    <AmortizationChart data={amortization} />
                </div>
            </div>
        );
    }

}

export default MortgageCalculator;