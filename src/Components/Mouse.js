import React from "react";
import Cat from "./MouseCat";

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0};
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
          <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
    
            <h1>Mova seu Mouse</h1>
            <p>Posição do mouse é ({this.state.x}, {this.state.y})</p>
            <Cat mouse={this.state}/>
    
          </div>
        );
      }
    }
    
export default Mouse;