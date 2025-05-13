import React, { Component } from "react";
import Data from "./Data";
import "./Add.css"; 

class Add extends Component {
    constructor(props) {
        super(props);
        const products = Data("products");
        this.state = {
            products: products,
            id: products.length ? parseInt(products[products.length - 1].id) + 1 : 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: ""
        };
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "image" && event.target.files && event.target.files[0]) {
            val = URL.createObjectURL(event.target.files[0]);
        }
        this.setState({ [nam]: val });
    };

    saveProducts = (products) => {
        localStorage.setItem("products", JSON.stringify(products));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { id, name, name_category, code, image, price, old_price, products } = this.state;
        const newProduct = { id: id.toString(), name, name_category, code, image, price, old_price };
        const updatedProducts = [...products, newProduct];
        this.saveProducts(updatedProducts);
        alert("Một sản phẩm đã được thêm vào!");
        this.setState({
            products: updatedProducts,
            id: parseInt(id) + 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: ""
        });
    };

    render() {
        return (
            <div className="add-container">
                <div className="form-card">
                    <h2 className="form-title">Thêm sản phẩm mới</h2>
                    <form onSubmit={this.handleSubmit} className="product-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input 
                                    id="name" 
                                    name="name" 
                                    value={this.state.name} 
                                    onChange={this.handleChange} 
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="name_category">Danh mục</label>
                                <select 
                                    id="name_category" 
                                    name="name_category" 
                                    value={this.state.name_category} 
                                    onChange={this.handleChange}
                                >
                                    <option value="Thời trang nam">Thời trang nam</option>
                                    <option value="Thời trang nữ">Thời trang nữ</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="code">Mã sản phẩm</label>
                                <input 
                                    id="code" 
                                    name="code" 
                                    value={this.state.code} 
                                    onChange={this.handleChange} 
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="image">Hình ảnh</label>
                                <input 
                                    type="file" 
                                    id="image" 
                                    name="image" 
                                    onChange={this.handleChange} 
                                    accept="image/*"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="price">Giá hiện tại</label>
                                <input 
                                    type="number" 
                                    id="price" 
                                    name="price" 
                                    value={this.state.price} 
                                    onChange={this.handleChange} 
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="old_price">Giá cũ</label>
                                <input 
                                    type="number" 
                                    id="old_price" 
                                    name="old_price" 
                                    value={this.state.old_price} 
                                    onChange={this.handleChange} 
                                />
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            Lưu sản phẩm
                        </button>
                    </form>
                </div>

                <div className="product-list">
                    <h3>Danh sách sản phẩm</h3>
                    <div className="product-table">
                        <div className="table-header">
                            <div>Hình ảnh</div>
                            <div>Tên sản phẩm</div>
                            <div>Danh mục</div>
                            <div>Mã SP</div>
                            <div>Giá hiện tại</div>
                            <div>Giá cũ</div>
                        </div>
                        
                        {this.state.products.map(product => (
                            <div className="table-row" key={product.id}>
                                <div className="product-image">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                    />
                                </div>
                                <div>{product.name}</div>
                                <div>{product.name_category}</div>
                                <div>{product.code}</div>
                                <div className="current-price">{product.price}</div>
                                <div className="old-price">{product.old_price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;