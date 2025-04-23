import React, { Component } from 'react';

class Dientich_hcn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      width: 0,
      area: 0,
    };
  }

  handleLengthChange = (e) => {
    this.setState({ length: Number(e.target.value) });
  };

  handleWidthChange = (e) => {
    this.setState({ width: Number(e.target.value) });
  };

  caculatorArea = () => {
    const { length, width } = this.state;
    this.setState({ area: length * width });
  };
  render() {
    const { length, width, area } = this.state;
    return (
      <div style={{ padding: '20px' }}>
        <h2>Tính diện tích hình chữ nhật</h2>
        <div>
          <label>Chiều dài: </label>
          <input
            type='number'
            value={length}
            onChange={this.handleLengthChange}
          />
          <label> Chiều rộng: </label>
          <input
            type='number'
            value={width}
            onChange={this.handleWidthChange}
          />
        </div>
        <button onClick={this.caculatorArea}>Tính diện tích</button>
        <h1>Diện tích: {area}</h1>
      </div>
    );
  }
}

export default Dientich_hcn;
