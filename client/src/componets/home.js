import React, { Component } from "react";
import logo from "../logo.svg";

export default class Home extends Component {
  render() {
    const styles = {
      maxWidth: "100vh"
    };
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5 className="App-title">Welcome to Gamerz</h5>
          <p className="lead">
            Check out Players profiles to Conncet and build teams
          </p>
        </header>
        <div className="container">
          <p className="App-intro text-left">Latest News</p>
          <div class="card border-light mb-3 text-left" style={styles}>
            <div class="card-header">Destiny</div>
            <div class="card-body">
              <h5 class="card-title">Fans are angry!!!</h5>
              <p class="card-text">
                In eget arcu in neque sagittis sagittis sit amet a ex. Etiam
                pharetra fermentum feugiat. Phasellus a mi ut mi condimentum
                condimentum. Morbi lacinia sem a arcu rutrum mattis elementum
                vel quam. Donec tincidunt ex non sem blandit consectetur. Donec
                auctor augue sed pellentesque pretium. Proin ligula lorem,
                tempus luctus pellentesque a, congue vel nunc. Aliquam eu mauris
                quis augue pretium bibendum sit amet dictum quam. Donec pulvinar
                viverra euismod.
              </p>
            </div>
          </div>
          <div class="card border-light mb-3 text-left" style={styles}>
            <div class="card-header">New Tournment</div>
            <div class="card-body">
              <h5 class="card-title">Gamerz coming together</h5>
              <p class="card-text">
                In eget arcu in neque sagittis sagittis sit amet a ex. Etiam
                pharetra fermentum feugiat. Phasellus a mi ut mi condimentum
                condimentum. Morbi lacinia sem a arcu rutrum mattis elementum
                vel quam. Donec tincidunt ex non sem blandit consectetur. Donec
                auctor augue sed pellentesque pretium. Proin ligula lorem,
                tempus luctus pellentesque a, congue vel nunc. Aliquam eu mauris
                quis augue pretium bibendum sit amet dictum quam. Donec pulvinar
                viverra euismod.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
