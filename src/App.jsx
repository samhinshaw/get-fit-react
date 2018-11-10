import React, { Component } from 'react';
import 'bulma';
import './App.css';

class App extends Component {
  render() {
    return (
      <nav class="navbar has-shadow is-light" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="/images/gym-near.svg" alt="Description" height="28" width="28" />
            </a>
            <div class="navbar-burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div class="navbar-menu" id="navMenu">
            <div class="navbar-start" />
            <div class="navbar-end">
              <span class="navbar-item">
                <div class="field is-grouped has-addons">
                  <div class="control">
                    <a class="button" href="/login">
                      Log in
                    </a>
                  </div>
                  <div class="control">
                    <a class="button" href="/register">
                      Sign up
                    </a>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
