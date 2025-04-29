import React, { Component } from 'react';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.products.length > 0 ? parseInt(props.products[props.products.length - 1].id) + 1 : 1,
      name: '',
      name_category: 'Thoi trang nam',
      code: '',
      image: '',
      price: '',
      old_price: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, files } = event.target;

    if (name === 'image' && files.length > 0) {
      this.setState({ image: 'images/' + files[0].name });
    } else {
      this.setState({ [name]: value });
    }
  }

  saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  handleSubmit(event) {
    event.preventDefault();

    const updatedList = [...this.props.products, this.state];
    this.saveProducts(updatedList);

    alert('Một sản phẩm đã được thêm vào!');
    window.location.reload();
  }

  render() {
    const { name, name_category, code, price, old_price } = this.state;

    return (
      <div className="col-sm-4">
        <form id="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Tên sản phẩm"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name_category">Category</label>
            <select
              className="form-control"
              id="name_category"
              name="name_category"
              value={name_category}
              onChange={this.handleChange}
            >
              <option value="Thoi trang nam">Thời trang Nam</option>
              <option value="Thoi trang nu">Thời trang Nữ</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="code">Code</label>
            <input
              className="form-control"
              id="code"
              name="code"
              value={code}
              placeholder="Mã sản phẩm"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              className="form-control"
              type="file"
              id="image"
              name="image"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              id="price"
              name="price"
              value={price}
              placeholder="Giá bán"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="old_price">Old Price</label>
            <input
              className="form-control"
              id="old_price"
              name="old_price"
              value={old_price}
              placeholder="Giá cũ"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-2">
            Save
          </button>
        </form>
      </div>
    );
  }
}
