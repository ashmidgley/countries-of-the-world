import React from 'react';
import './tooltip.css';

class Tooltip extends React.Component {

    render() {
        return (
            <div id="map_tooltip" style={this.props.style}>
                {this.props.value}
            </div>
        );
    }
}

export default Tooltip;
