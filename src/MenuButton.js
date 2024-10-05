import React, {PureComponent} from "react";
import './MenuButton.css';

class MenuButton extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     // if (nextProps.handleMouseDown === this.props.handleMouseDown) {
    //     //     return false;
    //     // } else {
    //     //     return true;
    //     // }
    //     return nextProps.handleMouseDown !== this.props.handleMouseDown;
    // }

    render() {
        console.log("Rendering: MenuButton");
        return (
            <button id="roundButton"
                onMouseDown={this.props.handleMouseDown}>
            </button>
        )
    }
}

export default MenuButton;