import React, {Component} from 'react';

class Button extends Component {

    render(){
        return( 
            <div>
                <button onClick={this.props.handleClick}>Generate advice</button>
            </div>
        );
    }
}

export default Button;