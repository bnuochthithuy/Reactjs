import React, { Component } from 'react';
import Header from './layout_page/Header';
import Footer from './layout_page/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToLogin: false,
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onRegister = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Kiểm tra người dùng đã tồn tại chưa
    const res = await fetch(`http://localhost:3000/user?username=${username}`);
    const existingUsers = await res.json();
    if (existingUsers.length > 0) {
      toast.error("Tên người dùng đã tồn tại!");
      return;
    }

    // Đăng ký user mới
    await fetch("http://localhost:3000/user", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    toast.success("Đăng ký thành công! Chuyển hướng tới đăng nhập...");
    setTimeout(() => this.setState({ redirectToLogin: true }), 2000);
  };

  render() {
    const { username, password, redirectToLogin } = this.state;

    if (redirectToLogin) return <Redirect to="/login" />;

    return (
      <React.Fragment>
        <Header />
        <ToastContainer />
        <div className="container">
          <form onSubmit={this.onRegister} className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h4>Đăng ký</h4>
                <div className="form-block">
                  <label>Username*</label>
                  <input className="form-control" type="text" name="username" value={username} onChange={this.onChange} required />
                </div>
                <div className="form-block">
                  <label>Password*</label>
                  <input className="form-control" type="password" name="password" value={password} onChange={this.onChange} required />
                </div>
                <div className="form-block">
                  <button type="submit" className="btn btn-success">Register</button>
                </div>
              </div>
              <div className="col-sm-3" />
            </div>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Register;
