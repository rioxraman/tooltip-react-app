import React, { Component } from 'react';
import withTooltip from "./withTooltip"
class Tooltip  extends Component {
     
    render() { 
        return (
            <div>
            Movie
            {this.props.showTooltip && <div>Show Tooltip</div>}
            </div>
        );
    }
}
 
export default withTooltip(Tooltip);