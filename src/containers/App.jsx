import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import './style.scss'

injectTapEventPlugin();

export default class App extends Component {
  
  static defaultProps = {
    children: null
  }
  
  static propTypes = {
    children: PropTypes.func
  };

  state = {

  }

  render() {
    const { children } = this.props;
    return (
      <div className="app">
        {children || <Link className="custom_btn" to="signup">SignUp</Link>}
      </div>
    );
  }
}
