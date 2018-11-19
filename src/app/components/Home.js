import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
    static propTypes = {
        startValue : PropTypes.number
    };

    static defaultProps = {
        startValue:0
    };

    constructor(props) {
        super(props);
        console.log('Home constructor', this.props);

        this.state = {
            counter: this.props.startValue,
            show: true
        };
    }

    increment = (event) => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement = (event) => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        let showButton = this.state.show ? <button onClick={this.toggle}>
            Show/Hide
    </button> : null;

        console.log('Home render', this.props);
        return (
            <div>
                <h2>Home Page</h2>
                <span>Counter </span>
                <span>{this.state.counter}</span>
                <button onClick={this.increment}>
                    +1
                </button>
                <button onClick={this.decrement}>
                    -1
                </button>
                <button onClick={this.toggle}>
                    Show/Hide
                </button>
                {
                    this.state.show &&
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                }
            </div>
        );
    }
}