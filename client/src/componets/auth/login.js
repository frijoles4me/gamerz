import React, { Component } from "react";

export default class Login extends Component {
  render() {
    const styles = {
      maxWidth: "40rem"
    };
    return (
      <div className="container d-flex justify-content-center">
        <div className="card border-dark mt-3" style={styles}>
          <h1 class="card-title">Login</h1>
          <form className="mx-3">
            <div class="form-group">
              <div className="text-left">Email address</div>
              <input
                type="email"
                class="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <div className="text-left">Password</div>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-1">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
