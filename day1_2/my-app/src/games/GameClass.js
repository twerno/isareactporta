import React from 'react';

export class GameClass extends React.Component {
    state = {
        points: 0
    }

    componentDidUpdate() {
        if (this.state.points >= 50) {
            alert('Gratulacje wygrałeś w grę ' + this.props.name + '!');
            this.setState({ points: 0})
        }
    }

    increase = () => {
        this.setState({ points: this.state.points + 5});
    };
    decrease = () => {
        this.setState({ points: this.state.points - 5});
    };

    render() {
        return <>
            <h3>Witam w grze {this.props.name}!</h3>
            <h4>
                Twoje punkty to:
                <span style={{color: this.state.points < 0 ? 'red' : 'inherit'}}>
                    {this.state.points}</span>
            </h4>
            <div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        </>
    }
}