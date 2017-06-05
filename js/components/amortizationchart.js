import React from 'react';

class AmortizationChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemsMarkup = this.props.data.map((item, index) => {
            let itemMarkup = (
                <tr key={index}>
                    <td>{index}</td>
                    <td className='currency principal'>{Math.round(item.principalY).toLocaleString()}</td>
                    <td className='stretch'>
                        <div className='flex'>
                            <div className='bar principal' style={{ flex: item.principalY, WebKitFlex: item.principalY }}></div>
                            <div className='bar interest' style={{ flex: item.interestY, WebKitFlex: item.interestY }}></div>
                        </div>
                    </td>
                    <td className='interest'>
                        {Math.round(item.interestY).toLocaleString()}
                    </td>
                    <td className='currency'>
                        {Math.round(item.balance).toLocaleString()}
                    </td>
                </tr>
            );

            return itemMarkup;
        });

        let markup = (
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th className='currency'>Principal</th>
                        <th className='stretch'></th>
                        <th className='currency'>Interest</th>
                        <th className='currency'>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsMarkup}
                </tbody>
            </table>
        );
        return markup;
    }
}

export default AmortizationChart;