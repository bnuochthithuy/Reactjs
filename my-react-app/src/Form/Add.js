import React, { Component } from 'react';
import { getData } from '../../Form/Room'; // đúng đường dẫn
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      myfile: '',
      type_room: '',
      area: '',
      price: '',
      oldprice: '',
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  componentDidMount() {
    const rooms = getData();
    localStorage.setItem('rooms', JSON.stringify(rooms));

    if (localStorage.getItem('rooms')) {
      this.setState({ list: JSON.parse(localStorage.getItem('rooms')) });
    }
  }

  handleChange(event) {
    const { name, value, files } = event.target;
    this.setState({
      [name]: name === 'myfile' ? files[0]?.name : value,
    });
  }

  handleSave(event) {
    event.preventDefault();
    const newRoom = {
      id: this.state.list.length + 1,
      name: this.state.name,
      myfile: this.state.myfile,
      type_room: this.state.type_room,
      area: this.state.area,
      price: this.state.price,
      oldprice: this.state.oldprice,
    };
    const newList = [...this.state.list, newRoom];
    localStorage.setItem('rooms', JSON.stringify(newList));
    this.setState({
      id: '',
      name: '',
      myfile: '',
      type_room: '',
      area: '',
      price: '',
      oldprice: '',
      list: newList,
    });
  }

  handleOrder(event) {
    event.preventDefault();
    alert('Thanks for your order!');
  }

  render() {
    const { name, myfile, type_room, area, price, oldprice, list } = this.state;

    return (
      <div className="container">
        <h2>Add Room</h2>
        <form onSubmit={this.handleSave}>
          <input className="form-control" type="text" name="name" placeholder="Enter Room Name" value={name} onChange={this.handleChange} />
          <input className="form-control" type="file" name="myfile" onChange={this.handleChange} />
          <input className="form-control" type="text" name="type_room" placeholder="Enter Type Room" value={type_room} onChange={this.handleChange} />
          <input className="form-control" type="text" name="area" placeholder="Enter Area" value={area} onChange={this.handleChange} />
          <input className="form-control" type="text" name="price" placeholder="Enter Price" value={price} onChange={this.handleChange} />
          <input className="form-control" type="text" name="oldprice" placeholder="Enter Old Price" value={oldprice} onChange={this.handleChange} />

          <br />
          <button type="submit" className="btn btn-primary m-2">Save Room</button>
          <button type="button" className="btn btn-success m-2" onClick={this.handleOrder}>Đặt Phòng</button>
        </form>

        <br />
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link active" href="#">TRANG CHỦ</a></li>
            <li className="nav-item"><a className="nav-link disabled" href="#">PHÒNG VÀ MỨC GIÁ</a></li>
            <li className="nav-item"><a className="nav-link" href="#">ĐẶT PHÒNG</a></li>
            <li className="nav-item"><a className="nav-link" href="#">HÌNH ẢNH</a></li>
            <li className="nav-item"><a className="nav-link" href="#">GIỚI THIỆU</a></li>
          </ul>
        </nav>

        <table className="table table-striped table-dark mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type Room</th>
              <th>Image</th>
              <th>Area</th>
              <th>Price</th>
              <th>Old Price</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.type_room}</td>
                <td><img src={"images/" + item.myfile} alt="Room" style={{ width: '50px', height: '50px' }} /></td>
                <td>{item.area}</td>
                <td>{item.price}</td>
                <td>{item.oldprice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
