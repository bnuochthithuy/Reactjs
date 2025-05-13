// import React, {Component} from "react";
// class Products extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: JSON.parse(localStorage.getItem("products")) || [], // Lấy sản phẩm từ localStorage
//         };
//     }

//     componentDidMount() {
//         // Cập nhật lại state mỗi khi dữ liệu trong localStorage thay đổi
//         const products = JSON.parse(localStorage.getItem("products")) || [];
//         this.setState({ products });
//     }


//     render() {
//         const { products } = this.state;
//         return (
//             <div className="container">
//                 <h2>Product List</h2>
//                 <div className="row">
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <div key={product.id} className="col-sm-4">
//                                 <div className="card" style={{ marginBottom: '20px' }}>
//                                     <img
//                                         src={product.image}
//                                         alt={product.name}
//                                         className="card-img-top"
//                                         width={'400px'}
//                                         height={'400px'}
//                                     />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{product.name}</h5>
//                                         <p className="card-text">
//                                             Price: {product.price} VND
//                                         </p>
//                                         <p className="card-text">
//                                             Old Price: {product.old_price} VND
//                                         </p>
//                                         <p className="card-text">
//                                             Category: {product.name_category}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products available</p>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Products;



import React, { Component } from "react";

class Products extends Component {
    constructor(props) {
        super(props);
        // Đảm bảo lấy dữ liệu từ localStorage và parse thành array
        const productsFromLocalStorage = localStorage.getItem("products");
        this.state = {
            products: productsFromLocalStorage ? JSON.parse(productsFromLocalStorage) : [], 
        };
    }

    componentDidMount() {
        // Cập nhật lại state mỗi khi dữ liệu trong localStorage thay đổi
        const products = JSON.parse(localStorage.getItem("products")) || [];
        this.setState({ products });
    }

    render() {
        const { products } = this.state;
        return (
            <div className="container">
                <h2>Product List</h2>
                <div className="row">
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="col-sm-4">
                                <div className="card" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="card-img-top"
                                        width={'400px'}
                                        height={'400px'}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">
                                            Price: {product.price} VND
                                        </p>
                                        <p className="card-text">
                                            Old Price: {product.old_price} VND
                                        </p>
                                        <p className="card-text">
                                            Category: {product.name_category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        );
    }
}

export default Products;
