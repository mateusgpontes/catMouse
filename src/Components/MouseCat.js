import React from 'react';

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="http://www.pngonly.com/wp-content/uploads/2017/06/Cat-Sweet-PNG-File.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: '70px' }} />
      );
    }
}


export default Cat;
