import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0
    }
    render() { 
        return (
            <div>
                <span className={this.getBadgeClass()}> {this.formatCount()} </span>
                <button className='btn btn-secondary btn-sm'>Click</button>
            </div>
        );
    }

    getBadgeClass(){
        let classes = 'badge m-2 bg-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;