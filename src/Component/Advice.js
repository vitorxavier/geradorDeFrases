import React, {Component} from 'react';

class Advice extends Component {

    render(){
        return(
            <div><h3>{this.props.advice}</h3></div>
        );
    }
}

export default Advice;